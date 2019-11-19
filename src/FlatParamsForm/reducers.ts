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
      return {
        ...state,
        rooms: parseNumber(action.newValue, parseInt)
          .map(val => Math.min(Math.max(val, 1), 100))
          .getOrElse(1),
      }

    case FlatParamsFormActionTypes.TOGGLE_IS_URGENT:
      return { ...state, isUrgent: !state.isUrgent }

    case FlatParamsFormActionTypes.CHANGE_FULL_AREA:
      return {
        ...state,
        fullArea: parseArea(action.newValue)
          .map(val => Math.max(val, 1))
          .getOrElse(1),
      }

    case FlatParamsFormActionTypes.CHANGE_LIVING_AREA:
      return { ...state, livingArea: parseArea(action.newValue) }

    case FlatParamsFormActionTypes.CHANGE_KITCHEN_AREA:
      return { ...state, kitchenArea: parseArea(action.newValue) }

    default:
      return state
  }
}

const parseArea = (area: string): Option<number> => parseNumber(area).map(val => Math.max(val, 0))

const parseNumber = (num: string, parser = parseFloat): Option<number> =>
  Option.of(parser(num)).filter(val => !Number.isNaN(val))
