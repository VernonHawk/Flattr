import { None, Option } from 'funfix-core'
import { FlatParamsFormAction, FlatParamsFormActionTypes } from './actions'

interface FlatParamsFormState {
  readonly rooms: number
  readonly isUrgent: boolean
  readonly fullArea: number
  readonly livingArea: Option<number>
  readonly kitchenArea: Option<number>
}

const roomsBounds = { min: 1, max: 100 }
const fullAreaBounds = { min: 1 }
const areaBounds = { min: 0 }

const initialState: FlatParamsFormState = {
  rooms: roomsBounds.min,
  isUrgent: false,
  fullArea: fullAreaBounds.min,
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
          .map(val => Math.min(Math.max(val, roomsBounds.min), roomsBounds.max))
          .getOrElse(roomsBounds.min),
      }

    case FlatParamsFormActionTypes.TOGGLE_IS_URGENT:
      return { ...state, isUrgent: !state.isUrgent }

    case FlatParamsFormActionTypes.CHANGE_FULL_AREA:
      return {
        ...state,
        fullArea: parseArea(action.newValue)
          .map(val => Math.max(val, fullAreaBounds.min))
          .getOrElse(fullAreaBounds.min),
      }

    case FlatParamsFormActionTypes.CHANGE_LIVING_AREA:
      return { ...state, livingArea: parseArea(action.newValue) }

    case FlatParamsFormActionTypes.CHANGE_KITCHEN_AREA:
      return { ...state, kitchenArea: parseArea(action.newValue) }

    default:
      return state
  }
}

const parseArea = (area: string): Option<number> =>
  parseNumber(area).map(val => Math.max(val, areaBounds.min))

const parseNumber = (num: string, parser = parseFloat): Option<number> =>
  Option.of(parser(num)).filter(val => !Number.isNaN(val))
