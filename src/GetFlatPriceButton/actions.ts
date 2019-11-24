export enum GetFlatPriceButtonTypes {
  GET_FLAT_PRICE_REQUEST = 'GET_FLAT_PRICE',
}

interface GetFlatPriceAction {
  readonly type: GetFlatPriceButtonTypes.GET_FLAT_PRICE_REQUEST
}

export const getFlatPrice = (): GetFlatPriceAction => ({
  type: GetFlatPriceButtonTypes.GET_FLAT_PRICE_REQUEST,
})

export type GetFlatPriceButtonAction = GetFlatPriceAction
