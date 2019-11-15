import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = () => {}

export const store = createStore(rootReducer, composeWithDevTools())

export type AppState = ReturnType<typeof rootReducer>
