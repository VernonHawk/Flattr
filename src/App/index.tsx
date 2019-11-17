import { Container, CssBaseline, Grid, Typography } from '@material-ui/core'
import React from 'react'
import FlatParams from '../FlatParams'
import FlatPrice from '../FlatPrice'
import GetFlatPrice from '../GetFlatPrice'

const App = (): JSX.Element => (
  <Container maxWidth='md'>
    <CssBaseline />
    <Grid container direction='column' justify='center' alignItems='center' spacing={5}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <FlatPrice />
      </Grid>
      <Grid item>
        <FlatParams />
      </Grid>
      <Grid item>
        <GetFlatPrice />
      </Grid>
    </Grid>
  </Container>
)

const Header = (): JSX.Element => (
  <Grid container justify='center'>
    <Typography variant='h1'>Flattr</Typography>
    <Typography variant='h3'>Know how much a flat is really worth!</Typography>
  </Grid>
)

export default App
