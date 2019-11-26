import { Box, CircularProgress, Grid, Paper } from '@material-ui/core'
import React from 'react'
import { FlatLocationMap } from '../FlatLocationPicking'
import FlatParamsForm from '../FlatParamsForm'

const FlatParams = (): JSX.Element => (
  <Paper>
    <Grid container>
      <Grid item xs={7}>
        <Box width={500} height={340} display="flex" justifyContent="center" alignItems="center">
          <FlatLocationMap loadingElement={<CircularProgress size={100} />} />
        </Box>
      </Grid>

      <Grid item xs={5}>
        <FlatParamsForm />
      </Grid>
    </Grid>
  </Paper>
)

export default FlatParams
