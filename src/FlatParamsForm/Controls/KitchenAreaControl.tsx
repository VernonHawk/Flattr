import { TextField } from '@material-ui/core'
import React, { ChangeEvent } from 'react'

interface KitchenAreasControlProps {
  readonly area: number
  readonly onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const KitchenAreaControl = ({ area, onChange }: KitchenAreasControlProps): JSX.Element => (
  <TextField label='Kitchen' type='number' value={area} onChange={onChange} />
)

export default KitchenAreaControl
