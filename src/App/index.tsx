import { Container, CssBaseline, Grid, Typography } from '@material-ui/core'
import React from 'react'

const App = (): JSX.Element => (
  <Container maxWidth='md'>
    <CssBaseline />
    <Grid container direction='column' justify='center' alignItems='center'>
      <Typography variant='h1'>Flattr</Typography>
      <Typography variant='h3'>Get a fair price for your flat!</Typography>
    </Grid>
  </Container>
)

export default App
