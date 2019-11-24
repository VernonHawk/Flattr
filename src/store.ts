import { all, fork } from '@redux-saga/core/effects'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware, { SagaIterator } from 'redux-saga'
import { flatPramsForm } from './FlatParamsForm'
import { flatPrice, watchFlatPriceRequest } from './GetFlatPriceButton'

const rootReducer = combineReducers({ flatPramsForm, flatPrice })

function* rootSaga(): SagaIterator {
  yield all([watchFlatPriceRequest].map(fork))
}

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export type AppState = ReturnType<typeof rootReducer>
