import { Button } from '@material-ui/core'
import React from 'react'
import { GetFlatPriceButtonProps } from './container'

const GetFlatPriceButton = ({ onClick }: GetFlatPriceButtonProps): JSX.Element => (
  <Button variant="contained" color="primary" onClick={onClick}>
    Give me a price
  </Button>
)

export default GetFlatPriceButton
