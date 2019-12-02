import { Box, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core'
import SadIcon from '@material-ui/icons/SentimentVeryDissatisfied'
import React from 'react'
import { FlatPriceContainerProps, FlatPriceProps } from './container'

export const FlatPriceContainer = ({ component }: FlatPriceContainerProps): JSX.Element => (
  <Box>{component}</Box>
)

export const LoadingFlatPrice = (): JSX.Element => <CircularProgress size={33} />

const useFlatPriceErrorStyles = makeStyles({
  icon: {
    fontSize: '0.9em',
  },
})

export const FlatPriceError = (): JSX.Element => {
  const classes = useFlatPriceErrorStyles()

  return (
    <Typography variant="h4">
      Sorry, we couldn't load the price <SadIcon className={classes.icon} />
    </Typography>
  )
}

export const FlatPriceEmpty = (): JSX.Element => (
  <Box visibility="hidden">
    <Typography variant="h4">-</Typography>
  </Box>
)

const useFlatPriceStyles = makeStyles({
  price: {
    color: 'green',
  },
})

export const FlatPrice = ({ price }: FlatPriceProps): JSX.Element => {
  const classes = useFlatPriceStyles()

  return (
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
}
