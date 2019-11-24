import { call, put, select, takeEvery } from '@redux-saga/core/effects'
import { SagaIterator } from 'redux-saga'
import { Flat, formStateToPlainObject } from '../FlatParamsForm'
import { AppState } from '../store'
import { GetFlatPriceActionTypes, getFlatPriceError, getFlatPriceSuccess } from './actions'

const fetchFlatPrice = (flat: Flat): Promise<number> =>
  new Promise((resolve, reject): void => {
    setTimeout(
      () => (Math.random() > 0.2 ? resolve(Math.floor(Math.random() * 100000)) : reject()),
      Math.random() * 2000,
    )
  })

function* getFlatPrice(): SagaIterator {
  try {
    const flatParams: Flat = yield select(
      ({ flatPramsForm }: AppState): Flat => formStateToPlainObject(flatPramsForm),
    )

    const price = (yield call(fetchFlatPrice, flatParams)) as number

    yield put(getFlatPriceSuccess(price))
  } catch (error) {
    yield put(getFlatPriceError())
  }
}

export function* watchFlatPriceRequest(): SagaIterator {
  yield takeEvery(GetFlatPriceActionTypes.GET_FLAT_PRICE_REQUEST, getFlatPrice)
}
