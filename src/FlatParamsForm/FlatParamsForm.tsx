import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { ChangeEvent } from 'react'
import AreaControls from './AreaControls'
import IsUrgentControl from './IsUrgentControl'
import RoomsControl from './RoomsControl'

const useStyles = makeStyles({
  form: {
    padding: '1rem',
  },
  isUrgentControl: {
    marginBottom: '-1rem',
  },
  isUrgentContainer: {
    display: 'flex',
  },
})

const FlatParamsForm = (): JSX.Element => {
  const classes = useStyles()

  const handleRoomsChange = (event: ChangeEvent<HTMLInputElement>): void => {
    Number(event.target.value)
  }

  return (
    <Grid container direction='column' spacing={2} className={classes.form}>
      <Grid item container spacing={2}>
        <Grid item xs={6}>
          <RoomsControl rooms={1} onChange={handleRoomsChange} />
        </Grid>
        <Grid item xs={6} className={classes.isUrgentContainer}>
          <IsUrgentControl
            isChecked={false}
            onChange={() => {}}
            className={classes.isUrgentControl}
          />
        </Grid>
      </Grid>

      <Grid item>
        <AreaControls
          fullArea={5}
          onFullAreaChange={() => {}}
          livingRoomsArea={3.3}
          onLivingRoomsAreaChange={() => {}}
          kitchenArea={1.7}
          onKitchenAreaChange={() => {}}
        />
      </Grid>
    </Grid>
  )
}

export default FlatParamsForm
