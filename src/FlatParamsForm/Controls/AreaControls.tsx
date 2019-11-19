import { TextField } from '@material-ui/core'
import { StandardTextFieldProps } from '@material-ui/core/TextField'
import React, { ChangeEvent } from 'react'

interface AreaControlProps extends StandardTextFieldProps {
  readonly area: number
  readonly onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const AreaControl = ({ area, onChange, ...rest }: AreaControlProps): JSX.Element => (
  <TextField type='number' value={area} onChange={onChange} {...rest} />
)

export const FullAreaControl = (props: AreaControlProps): JSX.Element => (
  <AreaControl label='Area' type='number' required fullWidth {...props} />
)

export const KitchenAreaControl = (props: AreaControlProps): JSX.Element => (
  <TextField label='Kitchen' {...props} />
)

export const LivingAreaControl = (props: AreaControlProps): JSX.Element => (
  <TextField label='Living rooms' {...props} />
)
