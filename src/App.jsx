import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Header from './components/header/Header';
import Filter from './components/filter/Filter';
import Tabs from './components/tabs/Tabs';
import Ticket from './components/ticket/Ticket';
import Footer from './components/footer/Footer';
import Loader from './components/loading/Loading';
import { GET_TICKET_FROM_API } from './state/actions';

import classes from './App.module.scss';
import Error from './components/Error/Error';

function App({
  tickets, transfers, filters, GET_TICKET_FROM_API, loading,
}) {
  const [showMore, setShowMore] = useState(true);
  useEffect(() => {
    GET_TICKET_FROM_API();
  }, []);

  function renderTickets(tickets, transfers, filters) {
    console.log(tickets);
    console.log(transfers);
    console.log(filters);

    const {
      one, two, three, nothing,
    } = transfers;
    const { cheapest, fastest } = filters;

    if (one && two && three && nothing && !cheapest && !fastest) {
      return tickets
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && two && three && nothing && !cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3) ||
                        ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2 ||
                        ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0
          ) {
            return ticket;
          }
        })
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && !two && three && nothing && !cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2 ||
                        ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0
          ) {
            return ticket;
          }
        })
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && two && !three && nothing && !cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3) ||
                        ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0
          ) {
            return ticket;
          }
        })
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && two && three && !nothing && !cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3) ||
                        ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2
          ) {
            return ticket;
          }
        })
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && !two && !three && nothing && !cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 0 &&
                            ticket.segments[0].stops.length < 2) ||
                        (ticket.segments[1].stops.length > 0 &&
                            ticket.segments[1].stops.length < 2) ||
                        ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0
          ) {
            return ticket;
          }
        })
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && !two && three && !nothing && !cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 0 &&
                            ticket.segments[0].stops.length < 2) ||
                        (ticket.segments[1].stops.length > 0 &&
                            ticket.segments[1].stops.length < 2) ||
                        ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2
          ) {
            return ticket;
          }
        })
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && !two && three && nothing && !cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2 ||
                        ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0 ||
                        (ticket.segments[0].stops.length > 0 &&
                            ticket.segments[0].stops.length < 2) ||
                        (ticket.segments[1].stops.length > 0 &&
                            ticket.segments[1].stops.length < 2)
          ) {
            return ticket;
          }
        })
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && two && !three && nothing && !cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 0 &&
                            ticket.segments[0].stops.length < 2) ||
                        (ticket.segments[1].stops.length > 0 &&
                            ticket.segments[1].stops.length < 2) ||
                        (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3) ||
                        ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0
          ) {
            return ticket;
          }
        })
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && two && !three && !nothing && !cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0 ||
                        ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2
          ) {
            return ticket;
          }
        })
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && two && three && !nothing && !cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 0 &&
                            ticket.segments[0].stops.length < 2) ||
                        (ticket.segments[1].stops.length > 0 &&
                            ticket.segments[1].stops.length < 2) ||
                        (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3) ||
                        ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2
          ) {
            return ticket;
          }
        })
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && !two && !three && !nothing && !cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 0 &&
                            ticket.segments[0].stops.length < 2) ||
                        (ticket.segments[1].stops.length > 0 &&
                            ticket.segments[1].stops.length < 2)
          ) {
            return ticket;
          }
        })
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && two && !three && !nothing && !cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3)
          ) {
            return ticket;
          }
        })
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && !two && three && !nothing && !cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2
          ) {
            return ticket;
          }
        })
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && !two && !three && nothing && !cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0
          ) {
            return ticket;
          }
        })
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && !two && !three && nothing && cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0
          ) {
            return ticket;
          }
        })
        .sort((a, b) => a.price - b.price)
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && !two && three && !nothing && cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2
          ) {
            return ticket;
          }
        })
        .sort((a, b) => a.price - b.price)
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && two && !three && !nothing && cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3)
          ) {
            return ticket;
          }
        })
        .sort((a, b) => a.price - b.price)
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && !two && !three && !nothing && cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 0 &&
                            ticket.segments[0].stops.length < 2) ||
                        (ticket.segments[1].stops.length > 0 &&
                            ticket.segments[1].stops.length < 2)
          ) {
            return ticket;
          }
        })
        .sort((a, b) => a.price - b.price)
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && two && three && nothing && cheapest && !fastest) {
      return tickets
        .map(ticket => ticket)
        .sort((a, b) => a.price - b.price)
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && !two && !three && nothing && cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0 ||
                        (ticket.segments[0].stops.length > 0 &&
                            ticket.segments[0].stops.length < 2) ||
                        (ticket.segments[1].stops.length > 0 &&
                            ticket.segments[1].stops.length < 2)
          ) {
            return ticket;
          }
        })
        .sort((a, b) => a.price - b.price)
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && two && !three && nothing && cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0 ||
                        (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3)
          ) {
            return ticket;
          }
        })
        .sort((a, b) => a.price - b.price)
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && !two && three && nothing && cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0 ||
                        ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2
          ) {
            return ticket;
          }
        })
        .sort((a, b) => a.price - b.price)
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && two && three && nothing && cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3) ||
                        ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0 ||
                        ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2
          ) {
            return ticket;
          }
        })
        .sort((a, b) => a.price - b.price)
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && two && !three && nothing && cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3) ||
                        ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0 ||
                        ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2
          ) {
            return ticket;
          }
        })
        .sort((a, b) => a.price - b.price)
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && two && three && !nothing && cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 0 &&
                            ticket.segments[0].stops.length < 2) ||
                        (ticket.segments[1].stops.length > 0 &&
                            ticket.segments[1].stops.length < 2) ||
                        (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3) ||
                        ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2
          ) {
            return ticket;
          }
        })
        .sort((a, b) => a.price - b.price)
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && !two && three && nothing && cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 0 &&
                            ticket.segments[0].stops.length < 2) ||
                        (ticket.segments[1].stops.length > 0 &&
                            ticket.segments[1].stops.length < 2) ||
                        ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2 ||
                        ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0
          ) {
            return ticket;
          }
        })
        .sort((a, b) => a.price - b.price)
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && two && !three && !nothing && cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3) ||
                        (ticket.segments[0].stops.length > 0 &&
                            ticket.segments[0].stops.length < 2) ||
                        (ticket.segments[1].stops.length > 0 &&
                            ticket.segments[1].stops.length < 2)
          ) {
            return ticket;
          }
        })
        .sort((a, b) => a.price - b.price)
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && !two && three && !nothing && cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2 ||
                        (ticket.segments[0].stops.length > 0 &&
                            ticket.segments[0].stops.length < 2) ||
                        (ticket.segments[1].stops.length > 0 &&
                            ticket.segments[1].stops.length < 2)
          ) {
            return ticket;
          }
        })
        .sort((a, b) => a.price - b.price)
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && two && three && !nothing && cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2 ||
                        (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3)
          ) {
            return ticket;
          }
        })
        .sort((a, b) => a.price - b.price)
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && two && three && nothing && cheapest && !fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3) ||
                        ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2 ||
                        ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0
          ) {
            return ticket;
          }
        })
        .sort((a, b) => a.price - b.price)
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && !two && !three && nothing && !cheapest && fastest) {
      return tickets
        .filter(ticket => {
          if (
            ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0
          ) {
            return ticket;
          }
        })
        .sort(
          (a, b) =>
            a.segments[0].duration +
                        a.segments[1].duration -
                        (b.segments[0].duration + b.segments[1].duration),
        )
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && !two && three && !nothing && !cheapest && fastest) {
      return tickets
        .filter(ticket => {
          if (
            ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2
          ) {
            return ticket;
          }
        })
        .sort(
          (a, b) =>
            a.segments[0].duration +
                        a.segments[1].duration -
                        (b.segments[0].duration + b.segments[1].duration),
        )
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && two && !three && !nothing && !cheapest && fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3)
          ) {
            return ticket;
          }
        })
        .sort(
          (a, b) =>
            a.segments[0].duration +
                        a.segments[1].duration -
                        (b.segments[0].duration + b.segments[1].duration),
        )
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && !two && !three && !nothing && !cheapest && fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 0 &&
                            ticket.segments[0].stops.length < 2) ||
                        (ticket.segments[1].stops.length > 0 &&
                            ticket.segments[1].stops.length < 2)
          ) {
            return ticket;
          }
        })
        .sort(
          (a, b) =>
            a.segments[0].duration +
                        a.segments[1].duration -
                        (b.segments[0].duration + b.segments[1].duration),
        )
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && two && three && nothing && !cheapest && fastest) {
      return tickets
        .map(ticket => ticket)
        .sort(
          (a, b) =>
            a.segments[0].duration +
                        a.segments[1].duration -
                        (b.segments[0].duration + b.segments[1].duration),
        )
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && !two && !three && nothing && !cheapest && fastest) {
      return tickets
        .filter(ticket => {
          if (
            ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0 ||
                        (ticket.segments[0].stops.length > 0 &&
                            ticket.segments[0].stops.length < 2) ||
                        (ticket.segments[1].stops.length > 0 &&
                            ticket.segments[1].stops.length < 2)
          ) {
            return ticket;
          }
        })
        .sort(
          (a, b) =>
            a.segments[0].duration +
                        a.segments[1].duration -
                        (b.segments[0].duration + b.segments[1].duration),
        )
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && two && !three && nothing && !cheapest && fastest) {
      return tickets
        .filter(ticket => {
          if (
            ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0 ||
                        (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3)
          ) {
            return ticket;
          }
        })
        .sort(
          (a, b) =>
            a.segments[0].duration +
                        a.segments[1].duration -
                        (b.segments[0].duration + b.segments[1].duration),
        )
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && !two && three && nothing && !cheapest && fastest) {
      return tickets
        .filter(ticket => {
          if (
            ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0 ||
                        ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2
          ) {
            return ticket;
          }
        })
        .sort(
          (a, b) =>
            a.segments[0].duration +
                        a.segments[1].duration -
                        (b.segments[0].duration + b.segments[1].duration),
        )
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && two && three && nothing && !cheapest && fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3) ||
                        ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0 ||
                        ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2
          ) {
            return ticket;
          }
        })
        .sort(
          (a, b) =>
            a.segments[0].duration +
                        a.segments[1].duration -
                        (b.segments[0].duration + b.segments[1].duration),
        )
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && two && !three && nothing && !cheapest && fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3) ||
                        ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0 ||
                        ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2
          ) {
            return ticket;
          }
        })
        .sort(
          (a, b) =>
            a.segments[0].duration +
                        a.segments[1].duration -
                        (b.segments[0].duration + b.segments[1].duration),
        )
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && two && three && !nothing && !cheapest && fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 0 &&
                            ticket.segments[0].stops.length < 2) ||
                        (ticket.segments[1].stops.length > 0 &&
                            ticket.segments[1].stops.length < 2) ||
                        (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3) ||
                        ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2
          ) {
            return ticket;
          }
        })
        .sort(
          (a, b) =>
            a.segments[0].duration +
                        a.segments[1].duration -
                        (b.segments[0].duration + b.segments[1].duration),
        )
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && !two && three && nothing && !cheapest && fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 0 &&
                            ticket.segments[0].stops.length < 2) ||
                        (ticket.segments[1].stops.length > 0 &&
                            ticket.segments[1].stops.length < 2) ||
                        ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2 ||
                        ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0
          ) {
            return ticket;
          }
        })
        .sort(
          (a, b) =>
            a.segments[0].duration +
                        a.segments[1].duration -
                        (b.segments[0].duration + b.segments[1].duration),
        )
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && two && !three && !nothing && !cheapest && fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3) ||
                        (ticket.segments[0].stops.length > 0 &&
                            ticket.segments[0].stops.length < 2) ||
                        (ticket.segments[1].stops.length > 0 &&
                            ticket.segments[1].stops.length < 2)
          ) {
            return ticket;
          }
        })
        .sort(
          (a, b) =>
            a.segments[0].duration +
                        a.segments[1].duration -
                        (b.segments[0].duration + b.segments[1].duration),
        )
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (one && !two && three && !nothing && !cheapest && fastest) {
      return tickets
        .filter(ticket => {
          if (
            ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2 ||
                        (ticket.segments[0].stops.length > 0 &&
                            ticket.segments[0].stops.length < 2) ||
                        (ticket.segments[1].stops.length > 0 &&
                            ticket.segments[1].stops.length < 2)
          ) {
            return ticket;
          }
        })
        .sort(
          (a, b) =>
            a.segments[0].duration +
                        a.segments[1].duration -
                        (b.segments[0].duration + b.segments[1].duration),
        )
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && two && three && !nothing && !cheapest && fastest) {
      return tickets
        .filter(ticket => {
          if (
            ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2 ||
                        (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3)
          ) {
            return ticket;
          }
        })
        .sort(
          (a, b) =>
            a.segments[0].duration +
                        a.segments[1].duration -
                        (b.segments[0].duration + b.segments[1].duration),
        )
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    if (!one && two && three && nothing && !cheapest && fastest) {
      return tickets
        .filter(ticket => {
          if (
            (ticket.segments[0].stops.length > 1 &&
                            ticket.segments[0].stops.length < 3) ||
                        (ticket.segments[1].stops.length > 1 &&
                            ticket.segments[1].stops.length < 3) ||
                        ticket.segments[0].stops.length > 2 ||
                        ticket.segments[1].stops.length > 2 ||
                        ticket.segments[0].stops.length === 0 ||
                        ticket.segments[1].stops.length === 0
          ) {
            return ticket;
          }
        })
        .sort(
          (a, b) =>
            a.segments[0].duration +
                        a.segments[1].duration -
                        (b.segments[0].duration + b.segments[1].duration),
        )
        .map(ticket => <Ticket ticket={ticket} />)
        .splice(0, 5);
    }

    return <Error />;
  }

  console.log(renderTickets(tickets, transfers, filters));
  return (
    <div>
      <Header />
      <div className={classes.sort}>
        <Filter />
        <div>
          <Tabs />
          {loading ? (
            <Loader />
          ) : (
            [
              renderTickets(tickets, transfers, filters),
              Array.isArray(
                renderTickets(tickets, transfers, filters),
              ) ? (
                <Footer />
                ) : null,
            ]
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  transfers: state.transfers,
  filters: state.filters,
  tickets: state.tickets,
  loading: state.loading,
});

export default connect(mapStateToProps, { GET_TICKET_FROM_API })(App);
