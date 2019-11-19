import { Checkbox, FormControlLabel } from '@material-ui/core'
import { FormControlLabelProps } from '@material-ui/core/FormControlLabel'
import FireIcon from '@material-ui/icons/Whatshot'
import React from 'react'

interface IsUrgentControlProps {
  readonly isChecked: boolean
  readonly onChange: () => void
}

const IsUrgentControl = ({
  isChecked,
  onChange,
  ...rest
}: IsUrgentControlProps & Omit<FormControlLabelProps, 'control' | 'label'>): JSX.Element => (
  <FormControlLabel
    control={
      <Checkbox
        icon={<FireIcon />}
        checkedIcon={<FireIcon htmlColor='darkorange' />}
        checked={isChecked}
        onChange={onChange}
      />
    }
    label='Is urgent?'
    {...rest}
  />
)

export default IsUrgentControl
