import { Checkbox, FormControlLabel } from '@material-ui/core'
import FireIcon from '@material-ui/icons/Whatshot'
import React from 'react'
import { IsUrgentControlProps } from './IsUrgentControl.container'

const IsUrgentControl = ({ isChecked, onChange, ...rest }: IsUrgentControlProps): JSX.Element => (
  <FormControlLabel
    label='Is urgent?'
    control={
      <Checkbox
        icon={<FireIcon />}
        checkedIcon={<FireIcon htmlColor='darkorange' />}
        checked={isChecked}
        onChange={onChange}
      />
    }
    {...rest}
  />
)

export default IsUrgentControl
