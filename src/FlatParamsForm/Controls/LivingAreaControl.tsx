import { Grid, TextField } from '@material-ui/core'
import React, { ChangeEvent } from 'react'

interface LivingAreaControlProps {
  readonly area: number
  readonly onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const LivingAreaControl = ({ area, onChange }: LivingAreaControlProps): JSX.Element => (
  <TextField label='Living rooms' type='number' value={area} onChange={onChange} />
)

export default LivingAreaControl
