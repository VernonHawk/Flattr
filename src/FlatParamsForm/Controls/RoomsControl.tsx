import { TextField } from '@material-ui/core'
import React, { ChangeEvent } from 'react'

interface RoomsControlProps {
  readonly rooms: number
  readonly onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const roomLimits = { min: 1, step: 1, max: 100 }

const RoomsControl = ({ rooms, onChange }: RoomsControlProps): JSX.Element => (
  <TextField
    label='Rooms'
    type='number'
    required
    fullWidth
    inputProps={roomLimits}
    value={rooms}
    onChange={onChange}
  />
)

export default RoomsControl
