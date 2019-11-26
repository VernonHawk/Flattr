import { None, Option, Some } from 'funfix-core'
import { GetFlatPriceAction, GetFlatPriceActionTypes } from './actions'

interface FlatPriceState {
  readonly price: Option<number>
  readonly isLoading: boolean
}

const initialState: FlatPriceState = {
  price: None,
  isLoading: false,
}

export const flatPrice = (state = initialState, action: GetFlatPriceAction): FlatPriceState => {
  switch (action.type) {
    case GetFlatPriceActionTypes.GET_FLAT_PRICE_REQUEST:
      return { ...state, isLoading: true }

    case GetFlatPriceActionTypes.GET_FLAT_PRICE_SUCCESS:
      return { ...state, price: Some(action.price), isLoading: false }

    case GetFlatPriceActionTypes.GET_FLAT_PRICE_ERROR:
      return { ...state, price: None, isLoading: false }

    default:
      return state
  }
}