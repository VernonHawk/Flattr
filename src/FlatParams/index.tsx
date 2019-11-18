import { Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { FormControlLabelProps } from '@material-ui/core/FormControlLabel'
import FireIcon from '@material-ui/icons/Whatshot'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import AreaControls from './AreaControls'

const FlatParams = (): JSX.Element => (
  <Paper>
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Typography>Map</Typography>
      </Grid>

      <Grid item xs={9}>
        <FlatParamsForm />
      </Grid>
    </Grid>
  </Paper>
)

const useStyles = makeStyles({
  form: {
    padding: '1rem',
  },
  isUrgentControl: {
    marginBottom: '-1rem',
  },
})

const FlatParamsForm = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Grid container direction='column' spacing={2} className={classes.form}>
      <Grid item container spacing={2}>
        <Grid item xs={6}>
          <TextField label='Rooms' type='number' required />
        </Grid>
        <Grid item container xs={6}>
          <IsUrgentControl className={classes.isUrgentControl} />
        </Grid>
      </Grid>

      <Grid item>
        <AreaControls />
      </Grid>
    </Grid>
  )
}

const IsUrgentControl = (props: Omit<FormControlLabelProps, 'control' | 'label'>): JSX.Element => (
  <FormControlLabel
    control={<Checkbox icon={<FireIcon />} checkedIcon={<FireIcon htmlColor='darkorange' />} />}
    label='Is urgent?'
    {...props}
  />
)

export default FlatParams
