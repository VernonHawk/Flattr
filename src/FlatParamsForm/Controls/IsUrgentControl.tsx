import { Checkbox, FormControlLabel } from '@material-ui/core'
import FireIcon from '@material-ui/icons/Whatshot'
import React from 'react'
import { IsUrgentControlProps } from './IsUrgentControl.container'

const IsUrgentControl = ({ isUrgent, onChange, ...rest }: IsUrgentControlProps): JSX.Element => (
  <FormControlLabel
    label="Is urgent?"
    control={
      <Checkbox
        icon={<FireIcon />}
        checkedIcon={<FireIcon htmlColor="darkorange" />}
        checked={isUrgent}
        onChange={onChange}
      />
    }
    {...rest}
  />
)

export default IsUrgentControl
