import { Container, CssBaseline, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import FlatParams from '../FlatParams'
import FlatPrice from '../FlatPrice'
import GetFlatPriceButton from '../GetFlatPriceButton'

const useStyles = makeStyles({
  header: {
    marginTop: 20,
  },
})

const App = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Container maxWidth="md">
      <CssBaseline />
      <Grid container direction="column" justify="center" alignItems="center" spacing={5}>
        <Grid item className={classes.header}>
          <Header />
        </Grid>
        <Grid item>
          <FlatPrice />
        </Grid>
        <Grid item>
          <FlatParams />
        </Grid>
        <Grid item>
          <GetFlatPriceButton />
        </Grid>
      </Grid>
    </Container>
  )
}

const Header = (): JSX.Element => (
  <Grid container justify="center">
    <Typography variant="h3">Know how much a flat is really worth!</Typography>
  </Grid>
)

export default App
