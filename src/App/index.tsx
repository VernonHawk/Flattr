import { Container, CssBaseline, Typography } from '@material-ui/core'
import React from 'react'

const App = (): JSX.Element => {
  return (
    <Container maxWidth='md'>
      <CssBaseline />
      <Typography>Hello world!</Typography>
    </Container>
  )
}

export default App
