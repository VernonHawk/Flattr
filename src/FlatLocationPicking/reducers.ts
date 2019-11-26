import { None, Option, Some } from 'funfix-core'
import { FlatLocation, FlatLocationPickingAction, FlatLocationPickingActionType } from './actions'

interface FlatLocationState {
  readonly location: Option<FlatLocation>
}

const initialState: FlatLocationState = {
  location: None,
}

export const flatLocation = (
  state = initialState,
  action: FlatLocationPickingAction,
): FlatLocationState => {
  switch (action.type) {
    case FlatLocationPickingActionType.PICK_FLAT_LOCATION:
      return { ...state, location: Some(action.location) }

    default:
      return state
  }
}
