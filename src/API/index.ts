import { FlatLocation } from '../FlatLocationPicking'
import { FlatParams } from '../FlatParamsForm'

export const fetchFlatPrice = (flat: Flat): Promise<number> =>
  new Promise((resolve, reject): void => {
    setTimeout(
      () => (Math.random() > 0.2 ? resolve(Math.floor(Math.random() * 100000)) : reject()),
      Math.random() * 2000,
    )
  })

export type Flat = FlatParams & FlatLocation
