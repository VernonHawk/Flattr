import { Box, Grid, Paper } from '@material-ui/core'
import React from 'react'
import { Marker } from 'react-google-maps'
import FlatParamsForm from '../FlatParamsForm'
import KyivMap from '../KyivMap'

const FlatParams = (): JSX.Element => (
  <Paper>
    <Grid container>
      <Grid item xs={7}>
        <Box width={500} height={340}>
          <KyivMap
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<></>}
            mapElement={<div style={{ height: '100%' }} />}
          >
            <Marker position={{ lat: 50.464203, lng: 30.519828 }} />
          </KyivMap>
        </Box>
      </Grid>

      <Grid item xs={5}>
        <FlatParamsForm />
      </Grid>
    </Grid>
  </Paper>
)

export default FlatParams
