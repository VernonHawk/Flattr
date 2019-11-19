import { Grid, TextField } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/styles'
import React, { ChangeEvent } from 'react'
import { Expansion, ExpansionDetails, ExpansionSummary } from '../../Expansion'

const useStyles = makeStyles({
  summary: {
    width: '100%',
  },
})

interface AreaProps {
  readonly fullArea: number
  readonly onFullAreaChange: (event: ChangeEvent<HTMLInputElement>) => void
}

type AreaControlsProps = AreaProps & SubareasProps

const AreaControls = ({
  fullArea,
  onFullAreaChange,
  ...subareasProps
}: AreaControlsProps): JSX.Element => {
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
          value={fullArea}
          onChange={onFullAreaChange}
        />
      </ExpansionSummary>

      <ExpansionDetails>
        <Subareas {...subareasProps} />
      </ExpansionDetails>
    </Expansion>
  )
}

interface SubareasProps {
  readonly livingRoomsArea: number
  readonly onLivingRoomsAreaChange: (event: ChangeEvent<HTMLInputElement>) => void

  readonly kitchenArea: number
  readonly onKitchenAreaChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Subareas = ({
  livingRoomsArea,
  onLivingRoomsAreaChange,
  kitchenArea,
  onKitchenAreaChange,
}: SubareasProps): JSX.Element => (
  <Grid container spacing={1}>
    <Grid item xs={6}>
      <TextField
        label='Living rooms'
        type='number'
        value={livingRoomsArea}
        onChange={onLivingRoomsAreaChange}
      />
    </Grid>
    <Grid item xs={6}>
      <TextField label='Kitchen' type='number' value={kitchenArea} onChange={onKitchenAreaChange} />
    </Grid>
  </Grid>
)

const expansionPropagationControl = (event: React.MouseEvent | React.FocusEvent): void =>
  event.stopPropagation()

export default AreaControls
