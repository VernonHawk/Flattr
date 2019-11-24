import { Button, CircularProgress } from '@material-ui/core'
import React from 'react'
import { GetFlatPriceButtonProps } from './container'

const GetFlatPriceButton = ({
  isLoading,
  isDisabled,
  onClick,
}: GetFlatPriceButtonProps): JSX.Element => {
  const content = isLoading ? (
    <CircularProgress size={24} /> // the size of the text
  ) : (
    'Give me a price'
  )

  return (
    <Button variant="contained" color="primary" onClick={onClick} disabled={isDisabled}>
      {content}
    </Button>
  )
}

export default GetFlatPriceButton
