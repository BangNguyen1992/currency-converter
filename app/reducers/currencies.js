import { SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT } from '../actions/currencies';

const initState = {
  baseCurrency: 'USD',
  quoteCurrency: 'EUR',
  amount: 1,
  conversion: {},
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return {
        ...state,
        amount: action.amount || 0,
      };

    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      };

    default:
      return state;
  }
};

export default reducer;