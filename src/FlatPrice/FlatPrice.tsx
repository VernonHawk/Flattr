import { Box, CircularProgress, Grid, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { FlatPriceDisplayType, FlatPriceProps } from './container'

const useStyles = makeStyles({
  price: {
    color: 'green',
  },
})

const FlatPrice = ({ price, displayType }: FlatPriceProps): JSX.Element => {
  const classes = useStyles()

  const content =
    displayType === FlatPriceDisplayType.Loading ? (
      <CircularProgress size={33} /> // the size of the text
    ) : (
      <Grid container spacing={1}>
        <Grid item>
          <Typography variant="h4">A fair price is</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4" className={classes.price}>
            ${price}
          </Typography>
        </Grid>
      </Grid>
    )

  return (
    <Box visibility={displayType === FlatPriceDisplayType.Hidden ? 'hidden' : 'visible'}>
      {content}
    </Box>
  )
}

export default FlatPrice
