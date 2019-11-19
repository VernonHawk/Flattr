import { TextField } from '@material-ui/core'
import React from 'react'
import { AreaControlProps } from './AreaControls.containers'

const AreaControl = ({ area, ...rest }: AreaControlProps): JSX.Element => (
  <TextField type="number" value={area} {...rest} />
)

export const FullAreaControl = (props: AreaControlProps): JSX.Element => (
  <AreaControl label="Area" required {...props} />
)

export const LivingAreaControl = (props: AreaControlProps): JSX.Element => (
  <AreaControl label="Living rooms" {...props} />
)

export const KitchenAreaControl = (props: AreaControlProps): JSX.Element => (
  <AreaControl label="Kitchen" {...props} />
)
