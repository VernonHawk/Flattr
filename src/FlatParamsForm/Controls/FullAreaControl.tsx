import { TextField } from '@material-ui/core'
import { TextFieldProps } from '@material-ui/core/TextField'
import React, { ChangeEvent } from 'react'

interface AreaProps {
  readonly area: number
  readonly onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const FullAreaControl = ({ area, onChange, ...rest }: AreaProps & TextFieldProps): JSX.Element => (
  <TextField
    label='Area'
    type='number'
    required
    fullWidth
    value={area}
    onChange={onChange}
    {...rest}
  />
)

export default FullAreaControl
