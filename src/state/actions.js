import AviasalesService from '../services/services';

const avia = new AviasalesService();

export const TRANSFERS_NOTHING = () => ({ type: 'TRANSFERS_NOTHING' });

export const TRANSFERS_ONE = () => ({ type: 'TRANSFERS_ONE' });

export const TRANSFERS_TWO = () => ({ type: 'TRANSFERS_TWO' });

export const TRANSFERS_THREE = () => ({ type: 'TRANSFERS_THREE' });

export const TRANSFERS_ALL = () => ({ type: 'TRANSFERS_ALL' });

export const FILTERS_FASTEST = () => ({ type: 'FILTERS_FASTEST' });

export const FILTERS_CHEAPEST = () => ({ type: 'FILTERS_CHEAPEST' });

export const LOADING_ON = () => ({ type: 'LOADING_ON' });

export const LOADING_OFF = () => ({ type: 'LOADING_OFF' });

export const ADD_TICKETS = tickets => ({ type: 'ADD_TICKETS', payload: tickets });

export const GET_TICKET_FROM_API = () => async dispatch => {
  try {
    dispatch(LOADING_ON());
    const id = await avia.getId();
    async function recursiveGetTicket() {
      try {
        const tickets = await avia.getTickets(id);
        dispatch(ADD_TICKETS(tickets));
        if (!tickets.stop) {
          recursiveGetTicket();
        }
        return;
      } catch (err) {
        recursiveGetTicket();
      }
    }
    recursiveGetTicket();
    dispatch(LOADING_OFF());
  } catch (err) {
  }
};
