export enum FlatParamsFormActionTypes {
  CHANGE_ROOMS = 'CHANGE_ROOMS',
  TOGGLE_IS_URGENT = 'TOGGLE_IS_URGENT',
  CHANGE_FULL_AREA = 'CHANGE_FULL_AREA',
  CHANGE_LIVING_AREA = 'CHANGE_LIVING_AREA',
  CHANGE_KITCHEN_AREA = 'CHANGE_KITCHEN_AREA',
}

interface ChangeRoomsAction {
  readonly type: FlatParamsFormActionTypes.CHANGE_ROOMS
  readonly newValue: number
}

export const changeRooms = (newValue: number): ChangeRoomsAction => ({
  type: FlatParamsFormActionTypes.CHANGE_ROOMS,
  newValue,
})

interface ToggleIsUrgentAction {
  readonly type: FlatParamsFormActionTypes.TOGGLE_IS_URGENT
}

export const toggleIsUrgent = (): ToggleIsUrgentAction => ({
  type: FlatParamsFormActionTypes.TOGGLE_IS_URGENT,
})

interface ChangeFullAreaAction {
  readonly type: FlatParamsFormActionTypes.CHANGE_FULL_AREA
  readonly newValue: number
}

export const changeFullArea = (newValue: number): ChangeFullAreaAction => ({
  type: FlatParamsFormActionTypes.CHANGE_FULL_AREA,
  newValue,
})

interface ChangeLivingAreaAction {
  readonly type: FlatParamsFormActionTypes.CHANGE_LIVING_AREA
  readonly newValue: string
}

export const changeLivingArea = (newValue: string): ChangeLivingAreaAction => ({
  type: FlatParamsFormActionTypes.CHANGE_LIVING_AREA,
  newValue,
})

interface ChangeKitchenAreaAction {
  readonly type: FlatParamsFormActionTypes.CHANGE_KITCHEN_AREA
  readonly newValue: string
}

export const changeKitchenArea = (newValue: string): ChangeKitchenAreaAction => ({
  type: FlatParamsFormActionTypes.CHANGE_KITCHEN_AREA,
  newValue,
})

export type FlatParamsFormAction =
  | ChangeRoomsAction
  | ToggleIsUrgentAction
  | ChangeFullAreaAction
  | ChangeLivingAreaAction
  | ChangeKitchenAreaAction
