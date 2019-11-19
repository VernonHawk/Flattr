import { TextField } from '@material-ui/core'
import React from 'react'
import { RoomsControlProps } from './RoomsControl.container'

const RoomsControl = ({ rooms, ...rest }: RoomsControlProps): JSX.Element => (
  <TextField label="Rooms" type="number" required value={rooms} {...rest} />
)

export default RoomsControl
