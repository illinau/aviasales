const initialStore = {
    transfers: {
        all: true,
        nothing: true,
        one: true,
        two: true,
        three: true
    },
    filters: {
        cheapest: false,
        fastest: false
    }
};

export default function articleOnClickReducer(state = initialStore, action) {

    switch (action.type) {
        case 'TRANSFERS_NOTHING':
            return {
                ...state,
                transfers: {
                    ...state.transfers,
                    nothing: !state.transfers.nothing,
                }
            };
        case 'TRANSFERS_ONE':
            return {
                ...state,
                transfers: {
                    ...state.transfers,
                    one: !state.transfers.one,
                }
            };
        case 'TRANSFERS_TWO':
            return {
                ...state,
                transfers: {
                    ...state.transfers,
                    two: !state.transfers.two,
                }
            };
        case 'TRANSFERS_THREE':
            return {
                ...state,
                transfers: {
                    ...state.transfers,
                    three: !state.transfers.three,
                }
            };
        case 'TRANSFERS_ALL':
            return {
                ...state,
                transfers: {
                    all: !state.transfers.all,
                    nothing: !state.transfers.all,
                    one: !state.transfers.all,
                    two: !state.transfers.all,
                    three: !state.transfers.all,
                }
            };
        case 'FILTERS_CHEAPEST':
            return {
                ...state,
                filters: {
                    cheapest: true,
                    fastest: false,
                }
            };
        case 'FILTERS_FASTEST':
            return {
                ...state,
                filters: {
                    cheapest: false,
                    fastest: true,
                }
            };
        default:
            return state;
    }
};
