import { Grid } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/styles'
import React, { FocusEvent, MouseEvent } from 'react'
import { Expansion, ExpansionDetails, ExpansionSummary } from '../Expansion'
import { FullAreaControl, KitchenAreaControl, LivingAreaControl } from './Controls'

const useStyles = makeStyles({
  fullAreaContainer: {
    width: '100%',
  },
})

const AreaControlsContainer = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Expansion>
      <ExpansionSummary expandIcon={<ExpandMoreIcon />} className={classes.fullAreaContainer}>
        <FullAreaControl
          area={1}
          onChange={() => {}}
          onClick={stopExpansionPropagation}
          onFocus={stopExpansionPropagation}
        />
      </ExpansionSummary>

      <ExpansionDetails>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <LivingAreaControl area={1} onChange={() => {}} />
          </Grid>
          <Grid item xs={6}>
            <KitchenAreaControl area={1} onChange={() => {}} />
          </Grid>
        </Grid>
      </ExpansionDetails>
    </Expansion>
  )
}

const stopExpansionPropagation = (evt: MouseEvent | FocusEvent): void => evt.stopPropagation()

export default AreaControlsContainer
