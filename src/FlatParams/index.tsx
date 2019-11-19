import { Box, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import FlatParamsForm from './FlatParamsForm'

const FlatParams = (): JSX.Element => (
  <Paper>
    <Grid container spacing={1}>
      <Grid item xs={7}>
        <Box width={500} height={400}>
          <Typography>Map</Typography>
        </Box>
      </Grid>

      <Grid item xs={5}>
        <FlatParamsForm />
      </Grid>
    </Grid>
  </Paper>
)

export default FlatParams
