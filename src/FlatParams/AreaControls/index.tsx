import { Grid, TextField } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Expansion, ExpansionDetails, ExpansionSummary } from '../../Expansion'

const useStyles = makeStyles({
  summary: {
    width: '100%',
  },
  subareaInput: {
    maxWidth: '7rem',
  },
})

const AreaControls = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Expansion>
      <ExpansionSummary expandIcon={<ExpandMoreIcon />} className={classes.summary}>
        <TextField
          label='Area'
          type='number'
          required
          fullWidth
          onClick={expansionPropagationControl}
          onFocus={expansionPropagationControl}
        />
      </ExpansionSummary>

      <ExpansionDetails>
        <Grid container spacing={1}>
          <Grid item>
            <TextField label='Living rooms' type='number' className={classes.subareaInput} />
          </Grid>
          <Grid item>
            <TextField label='Kitchen' type='number' className={classes.subareaInput} />
          </Grid>
        </Grid>
      </ExpansionDetails>
    </Expansion>
  )
}

const expansionPropagationControl = (event: React.MouseEvent | React.FocusEvent): void =>
  event.stopPropagation()

export default AreaControls
