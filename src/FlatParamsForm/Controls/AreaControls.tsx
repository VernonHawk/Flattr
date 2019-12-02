import { TextField } from '@material-ui/core'
import React from 'react'
import { FullAreaControlProps } from './FullAreaControl.container'
import { AreaControlProps } from './SubAreaControls.containers'

const AreaControl = ({ area, ...rest }: AreaControlProps): JSX.Element => (
  <TextField type="number" value={area} {...rest} />
)

export const FullAreaControl = ({ errorHint, ...rest }: FullAreaControlProps): JSX.Element =>
  errorHint.fold(
    () => <AreaControl label="Area" required {...rest} />,
    hint => <AreaControl label="Area" required error helperText={hint} {...rest} />,
  )

export const LivingAreaControl = (props: AreaControlProps): JSX.Element => (
  <AreaControl label="Living rooms" {...props} />
)

export const KitchenAreaControl = (props: AreaControlProps): JSX.Element => (
  <AreaControl label="Kitchen" {...props} />
)
