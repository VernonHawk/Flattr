import { call, put, takeEvery } from '@redux-saga/core/effects'
import { SagaIterator } from 'redux-saga'
import { GetFlatPriceButtonTypes, getFlatPriceError, getFlatPriceSuccess } from './actions'

const fetchStub = (ms: number): Promise<number> =>
  new Promise((resolve, reject): void => {
    setTimeout(() => (Math.random() > 0.2 ? resolve(50000) : reject()), ms)
  })

function* getFlatPrice(): SagaIterator {
  try {
    const price = (yield call(fetchStub, 2000)) as number

    yield put(getFlatPriceSuccess(price))
  } catch (error) {
    yield put(getFlatPriceError())
  }
}

export function* watchFlatPriceRequest(): SagaIterator {
  yield takeEvery(GetFlatPriceButtonTypes.GET_FLAT_PRICE_REQUEST, getFlatPrice)
}
