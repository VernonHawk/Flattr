import { None, Option } from 'funfix-core'
import { FlatParamsFormAction, FlatParamsFormActionTypes } from './actions'

interface FlatParamsFormState {
  readonly rooms: number
  readonly isUrgent: boolean
  readonly fullArea: number
  readonly livingArea: Option<number>
  readonly kitchenArea: Option<number>
}

const initialState: FlatParamsFormState = {
  rooms: 1,
  isUrgent: false,
  fullArea: 0,
  livingArea: None,
  kitchenArea: None,
}

export const flatPramsForm = (
  state = initialState,
  action: FlatParamsFormAction,
): FlatParamsFormState => {
  switch (action.type) {
    case FlatParamsFormActionTypes.CHANGE_ROOMS:
      return { ...state, rooms: action.newValue }

    case FlatParamsFormActionTypes.TOGGLE_IS_URGENT:
      return { ...state, isUrgent: !state.isUrgent }

    case FlatParamsFormActionTypes.CHANGE_FULL_AREA:
      return { ...state, fullArea: action.newValue }

    case FlatParamsFormActionTypes.CHANGE_LIVING_AREA:
      return { ...state, livingArea: parseArea(action.newValue) }

    case FlatParamsFormActionTypes.CHANGE_KITCHEN_AREA:
      return { ...state, kitchenArea: parseArea(action.newValue) }

    default:
      return state
  }
}

const parseArea = (area: string): Option<number> =>
  Option.of(parseFloat(area)).filter(val => !Number.isNaN(val))
