import { FlatLocation } from '../FlatLocationPicking'
import { FlatParams } from '../FlatParamsForm'

export const fetchFlatPrice = async (flat: Flat): Promise<number> => {
  const resp = await fetch(process.env.API_URL!, {
    method: 'POST',
    body: JSON.stringify(flat),
  })

  const data: Flat = await resp.json()

  return Math.floor(Math.random() * 100000)
}

export type Flat = FlatParams & FlatLocation
