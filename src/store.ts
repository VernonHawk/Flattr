import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { flatPramsForm } from './FlatParamsForm'

const rootReducer = combineReducers({ flatPramsForm })

export const store = createStore(rootReducer, composeWithDevTools())

export type AppState = ReturnType<typeof rootReducer>
