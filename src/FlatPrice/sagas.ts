import { call, put, select, takeEvery } from '@redux-saga/core/effects'
import { SagaIterator } from 'redux-saga'
import { fetchFlatPrice, Flat } from '../API'
import { formStateToPlainObject } from '../FlatParamsForm'
import { AppState } from '../store'
import { GetFlatPriceActionTypes, getFlatPriceError, getFlatPriceSuccess } from './actions'

const flatStateFromAppState = ({ flatPramsForm, flatLocation }: AppState): Flat => ({
  ...formStateToPlainObject(flatPramsForm),
  ...flatLocation,
})

function* getFlatPrice(): SagaIterator {
  try {
    const flat: Flat = yield select(flatStateFromAppState)

    const price = (yield call(fetchFlatPrice, flat)) as number

    yield put(getFlatPriceSuccess(price))
  } catch (error) {
    console.error('Get price error:', error)
    yield put(getFlatPriceError())
  }
}

export function* watchFlatPriceRequest(): SagaIterator {
  yield takeEvery(GetFlatPriceActionTypes.GET_FLAT_PRICE_REQUEST, getFlatPrice)
}
