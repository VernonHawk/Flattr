import { FlatLocation } from '../FlatLocationPicking/actions'
import { FlatParams } from '../FlatParamsForm/reducers'

interface APIResponse {
  readonly price: number
}

export const fetchFlatPrice = async (flat: Flat): Promise<number> => {
  const resp = await fetch(process.env.API_URL!, {
    method: 'POST',
    body: JSON.stringify(flat),
  })

  const data: APIResponse = await resp.json()

  return data.price
}

export type Flat = FlatParams & FlatLocation
