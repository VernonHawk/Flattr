export enum GetFlatPriceActionTypes {
  GET_FLAT_PRICE_REQUEST = 'GET_FLAT_PRICE_REQUEST',
  GET_FLAT_PRICE_SUCCESS = 'GET_FLAT_PRICE_SUCCESS',
  GET_FLAT_PRICE_ERROR = 'GET_FLAT_PRICE_ERROR',
}

interface GetFlatPriceRequestAction {
  readonly type: GetFlatPriceActionTypes.GET_FLAT_PRICE_REQUEST
}

export const getFlatPriceRequest = (): GetFlatPriceRequestAction => ({
  type: GetFlatPriceActionTypes.GET_FLAT_PRICE_REQUEST,
})

interface GetFlatPriceSuccessAction {
  readonly type: GetFlatPriceActionTypes.GET_FLAT_PRICE_SUCCESS
  readonly price: number
}

export const getFlatPriceSuccess = (price: number): GetFlatPriceSuccessAction => ({
  type: GetFlatPriceActionTypes.GET_FLAT_PRICE_SUCCESS,
  price,
})

interface GetFlatPriceErrorAction {
  readonly type: GetFlatPriceActionTypes.GET_FLAT_PRICE_ERROR
}

export const getFlatPriceError = (): GetFlatPriceErrorAction => ({
  type: GetFlatPriceActionTypes.GET_FLAT_PRICE_ERROR,
})

export type GetFlatPriceAction =
  | GetFlatPriceRequestAction
  | GetFlatPriceSuccessAction
  | GetFlatPriceErrorAction
