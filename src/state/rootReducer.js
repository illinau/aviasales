const initialStore = {
  transfers: {
    nothing: true,
    one: true,
    two: true,
    three: true,
  },
  filters: {
    cheapest: false,
    fastest: false,
  },
  tickets: [],
  loading: false,
};

export default function articleOnClickReducer(state = initialStore, action) {
  switch (action.type) {
    case 'ADD_TICKETS':
      return {
        ...state,
        tickets: [...state.tickets.concat(action.payload.tickets)],
      };
    case 'LOADING_ON':
      return {
        ...state,
        loading: true,
      };
    case 'LOADING_OFF':
      return {
        ...state,
        loading: false,
      };
    case 'TRANSFERS_NOTHING':
      return {
        ...state,
        transfers: {
          ...state.transfers,
          nothing: !state.transfers.nothing,
        },
      };
    case 'TRANSFERS_ONE':
      return {
        ...state,
        transfers: {
          ...state.transfers,
          one: !state.transfers.one,
        },
      };
    case 'TRANSFERS_TWO':
      return {
        ...state,
        transfers: {
          ...state.transfers,
          two: !state.transfers.two,
        },
      };
    case 'TRANSFERS_THREE':
      return {
        ...state,
        transfers: {
          ...state.transfers,
          three: !state.transfers.three,
        },
      };
    case 'TRANSFERS_ALL':
      return {
        ...state,
        transfers: {
          nothing: true,
          one: true,
          two: true,
          three: true,
        },
      };
    case 'FILTERS_CHEAPEST':
      return {
        ...state,
        filters: {
          cheapest: true,
          fastest: false,
          optimal: false,
        },
      };
    case 'FILTERS_FASTEST':
      return {
        ...state,
        filters: {
          cheapest: false,
          fastest: true,
          optimal: false,
        },
      };
    default:
      return state;
  }
}
