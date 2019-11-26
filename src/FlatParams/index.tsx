import { Box, CircularProgress, Grid, Paper } from '@material-ui/core'
import React from 'react'
import FlatLocationPickingMap from '../FlatLocationPicking'
import FlatParamsForm from '../FlatParamsForm'

const NaUKMACoords = { lat: 50.464203, lng: 30.519828 }

const FlatParams = (): JSX.Element => (
  <Paper>
    <Grid container>
      <Grid item xs={7}>
        <Box width={500} height={340} display="flex" justifyContent="center" alignItems="center">
          <FlatLocationPickingMap
            defaultZoom={11}
            defaultCenter={NaUKMACoords}
            loadingElement={<CircularProgress size={100} />}
          />
        </Box>
      </Grid>

      <Grid item xs={5}>
        <FlatParamsForm />
      </Grid>
    </Grid>
  </Paper>
)

export default FlatParams
