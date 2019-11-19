import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import AreaControlsContainer from './AreaControls'
import { IsUrgentControl, RoomsControl } from './Controls'

const useStyles = makeStyles({
  form: {
    padding: '1rem',
  },
  isUrgentContainer: {
    display: 'flex',
  },
  isUrgentControl: {
    marginBottom: '-1rem',
  },
})

const FlatParamsForm = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Grid container direction="column" spacing={2} className={classes.form}>
      <Grid item container spacing={2}>
        <Grid item xs={6}>
          <RoomsControl fullWidth />
        </Grid>
        <Grid item xs={6} className={classes.isUrgentContainer}>
          <IsUrgentControl className={classes.isUrgentControl} />
        </Grid>
      </Grid>

      <Grid item>
        <AreaControlsContainer />
      </Grid>
    </Grid>
  )
}

export default FlatParamsForm
