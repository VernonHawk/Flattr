import { TextField } from '@material-ui/core'
import React from 'react'
import { RoomsControlProps } from './RoomsControl.container'

const roomLimits = { min: 1, step: 1, max: 100 }

const RoomsControl = ({ rooms, ...rest }: RoomsControlProps): JSX.Element => (
  <TextField label="Rooms" type="number" required inputProps={roomLimits} value={rooms} {...rest} />
)

export default RoomsControl
