import { None, Option, Some } from 'funfix-core'
import { FlatLocation, FlatLocationPickingAction, FlatLocationPickingActionType } from './actions'

type FlatLocationState = FlatLocation

const NaUKMACoords = { latitude: 50.464203, longitude: 30.519828 }

const initialState: FlatLocationState = NaUKMACoords

export const flatLocation = (
  state = initialState,
  action: FlatLocationPickingAction,
): FlatLocationState => {
  switch (action.type) {
    case FlatLocationPickingActionType.PICK_FLAT_LOCATION:
      return action.location

    default:
      return state
  }
}
