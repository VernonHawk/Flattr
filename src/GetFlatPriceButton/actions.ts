export enum GetFlatPriceButtonTypes {
  GET_FLAT_PRICE_REQUEST = 'GET_FLAT_PRICE_REQUEST',
  GET_FLAT_PRICE_SUCCESS = 'GET_FLAT_PRICE_SUCCESS',
  GET_FLAT_PRICE_ERROR = 'GET_FLAT_PRICE_ERROR',
}

interface GetFlatPriceRequestAction {
  readonly type: GetFlatPriceButtonTypes.GET_FLAT_PRICE_REQUEST
}

export const getFlatPriceRequest = (): GetFlatPriceRequestAction => ({
  type: GetFlatPriceButtonTypes.GET_FLAT_PRICE_REQUEST,
})

interface GetFlatPriceSuccessAction {
  readonly type: GetFlatPriceButtonTypes.GET_FLAT_PRICE_SUCCESS
  readonly price: number
}

export const getFlatPriceSuccess = (price: number): GetFlatPriceSuccessAction => ({
  type: GetFlatPriceButtonTypes.GET_FLAT_PRICE_SUCCESS,
  price,
})

interface GetFlatPriceErrorAction {
  readonly type: GetFlatPriceButtonTypes.GET_FLAT_PRICE_ERROR
}

export const getFlatPriceError = (): GetFlatPriceErrorAction => ({
  type: GetFlatPriceButtonTypes.GET_FLAT_PRICE_ERROR,
})

export type GetFlatPriceButtonAction =
  | GetFlatPriceRequestAction
  | GetFlatPriceSuccessAction
  | GetFlatPriceErrorAction
