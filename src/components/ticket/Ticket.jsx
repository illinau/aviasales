import React from 'react';

import classes from './Ticket.module.scss';
import Footer from '../footer/Footer';

const Ticket = ({ ticket }) => {
  const { price, carrier, segments } = ticket;
  const [destinationTo, destinationFrom] = segments;

  const transfersDesc = stops => {
    if (stops === 0) {
      return 'БЕЗ ПЕРЕСАДОК';
    }
    if (stops === 1) {
      return '1 ПЕРЕСАДКА';
    }
    return `${stops} ПЕРЕСАДКИ`;
  };

  const timeDesc = duration => {
    let strTime = '';
    const hours = (duration / 60) ^ 0;

    if (hours) {
      let minutes = duration % 60;
      if (minutes < 10) minutes = `0${minutes}`;
      strTime = `${hours}ч ${minutes}м`;
    } else {
      strTime = `${duration}м`;
    }
    return strTime;
  };

  const logo = `https://pics.avs.io/99/36/${carrier}.png`;

  // создает новую дату с временем прибытия
  const createArrivalData = (data1, minutes) => {
    const date2 = new Date(data1);
    date2.setMinutes(date2.getMinutes() + minutes);
    return date2;
  };

    // дата и время отбытия туда
  const departureDataThere = new Date(destinationTo.date);

  // дата и время прибытия туда
  const arrivalDataThere = createArrivalData(
    departureDataThere,
    destinationTo.duration,
  );

    // дата и время отбытия туда
  const departureDataBack = new Date(destinationFrom.date);

  // дата и время прибытия туда
  const arrivalDataBack = createArrivalData(
    departureDataBack,
    destinationFrom.duration,
  );

    // форматирует время из даты в строку, подставляет 0 или 00 в зависимости от длины строки
  const createTimeString = data => {
    const arrStrs = [
      String(data.getHours()),
      String(data.getMinutes()),
    ].map(el => {
      if (el.length === 2) {
        return el;
      }
      if (el.length === 1) {
        return `0${el}`;
      }
      if (el.length === 0) {
        return `00${el}`;
      }
    });
    return arrStrs.join(':');
  };

    // отформатированное время отправления туда
  const departureTimeThere = createTimeString(departureDataThere);
  // отформатированное время прибытия туда
  const arrivalTimeThere = createTimeString(arrivalDataThere);

  // отформатированное время отправления обратно
  const departureTimeBack = createTimeString(departureDataBack);
  // отформатированное время прибытия обратно
  const arrivalTimeBack = createTimeString(arrivalDataBack);

  return (
    <div className={classes.style}>
      <div className={classes.header}>
        <div className={classes.price}>
          {price.toLocaleString('ru-RU')}
          {' '}
          P
        </div>
        <img src={logo} alt="S7Logo" />
      </div>
      <table>
        <tr className={classes.row}>
          <td>
            {destinationTo.origin}
            -
            {destinationTo.destination}
          </td>
          <td>В ПУТИ</td>
          <td>{transfersDesc(destinationTo.stops.length)}</td>
        </tr>
        <tr className={classes.info}>
          <td>
            {departureTimeThere}
            -
            {arrivalTimeThere}
          </td>
          <td>{timeDesc(destinationTo.duration)}</td>
          <td>{destinationTo.stops.join(', ')}</td>
        </tr>
        <tr className={classes.row}>
          <td>
            {destinationFrom.origin}
            -
            {destinationFrom.destination}
          </td>
          <td>В ПУТИ</td>
          <td>{transfersDesc(destinationFrom.stops.length)}</td>
        </tr>
        <tr className={classes.info}>
          <td>
            {departureTimeBack}
            -
            {arrivalTimeBack}
          </td>
          <td>{timeDesc(destinationFrom.duration)}</td>
          <td>{destinationFrom.stops.join(', ')}</td>
        </tr>
      </table>
    </div>
  );
};

export default Ticket;
