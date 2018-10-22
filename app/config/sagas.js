// 1. Swap currency
// 2. Change base currency
// 3. upon initial app

import { takeEvery, select, call, put } from 'redux-saga/effects';
import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION, CONVERSION_ERROR, CONVERSION_RESULT } from '../actions/currencies';
// import currencies from '../data/currencies';


// const url = 'http://data.fixer.io/api';
const baseUrl = 'https://api.exchangeratesapi.io';

const getLatestRate = (currency) => {
  return fetch(`${baseUrl}/latest?base=${currency}`);
};

function* fetchLatestConversionRates(action) {
  try {
    let { currency } = action;
    // currency is undefined when we init the app
    // we will get currency from our initialState
    if (!currency) {
      currency = yield select(state => state.currencies.baseCurrency);
    }

    const response = yield call(getLatestRate, currency);
    const result = yield response.json();

    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result });
    }
  } catch (error) {
    yield put({ type: CONVERSION_ERROR, error: error.message });
  }

  // getLatestRate('USD')
  //   .then(res => res.json())
  //   .then(res => console.log('object', res))
  //   .catch(err => console.error('Error: ', err));

  yield;
}

// Generator function
export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
}
