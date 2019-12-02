import { all, fork } from '@redux-saga/core/effects'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware, { SagaIterator } from 'redux-saga'
import { flatLocation } from './FlatLocationPicking/reducers'
import { flatPramsForm } from './FlatParamsForm/reducers'
import { flatPrice } from './FlatPrice/reducers'
import { watchFlatPriceRequest } from './FlatPrice/sagas'

const rootReducer = combineReducers({ flatPramsForm, flatPrice, flatLocation })

function* rootSaga(): SagaIterator {
  yield all([watchFlatPriceRequest].map(fork))
}

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export type AppState = ReturnType<typeof rootReducer>
