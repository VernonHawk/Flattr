import { Button, CircularProgress } from '@material-ui/core'
import React from 'react'
import { GetFlatPriceButtonProps } from './container'

const GetFlatPriceButton = ({
  isLoading,
  isDisabled,
  onClick,
}: GetFlatPriceButtonProps): JSX.Element => (
  <Button variant="contained" color="primary" onClick={onClick} disabled={isDisabled}>
    {isLoading ? <CircularProgress size={24} /> : 'Give me a price'}
  </Button>
)

export default GetFlatPriceButton
