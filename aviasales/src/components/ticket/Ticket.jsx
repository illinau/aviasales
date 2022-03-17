import React from 'react';
import S7Logo from '../../img/S7 Logo.png';

import classes from './Ticket.module.scss';

const Ticket = () => (
  <div className={classes.style}>
    <div className={classes.header}>
      <div className={classes.price}>13 400 P</div>
      <img src={S7Logo} alt="S7Logo" />
    </div>
    <table>
      <tr className={classes.row}>
        <td>MOW-HKT</td>
        <td>В ПУТИ</td>
        <td>2 ПЕРЕСАДКИ</td>
      </tr>
      <tr className={classes.info}>
        <td>10:45 - 08:00</td>
        <td>21ч 15м</td>
        <td>HKG, JNB</td>
      </tr>
      <tr className={classes.row}>
        <td>MOW-HKT</td>
        <td>В ПУТИ</td>
        <td>2 ПЕРЕСАДКИ</td>
      </tr>
      <tr className={classes.info}>
        <td>11:20 - 00:50</td>
        <td>13ч 30м</td>
        <td>HKG</td>
      </tr>
    </table>
  </div>
);

export default Ticket;
