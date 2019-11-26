export enum FlatLocationPickingActionType {
  PICK_FLAT_LOCATION = 'PICK_FLAT_LOCATION',
}

interface PickFlatLocationAction {
  readonly type: FlatLocationPickingActionType.PICK_FLAT_LOCATION
  readonly location: FlatLocation
}

export const pickLocation = (location: FlatLocation): PickFlatLocationAction => ({
  type: FlatLocationPickingActionType.PICK_FLAT_LOCATION,
  location,
})

export interface FlatLocation {
  readonly latitude: number
  readonly longitude: number
}

export type FlatLocationPickingAction = PickFlatLocationAction
