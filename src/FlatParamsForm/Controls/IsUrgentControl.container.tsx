import { FormControlLabelProps } from '@material-ui/core/FormControlLabel'
import { connect } from 'react-redux'
import { AppState } from '../../store'
import { FlatParamsFormAction, toggleIsUrgent } from '../actions'
import IsUrgentControl from './IsUrgentControl'

type OwnProps = Omit<FormControlLabelProps, 'control' | 'label'>

interface StateProps {
  readonly isUrgent: boolean
}

interface DispatchProps {
  readonly onChange: () => FlatParamsFormAction
}

export type IsUrgentControlProps = OwnProps & StateProps & DispatchProps

export default connect(
  ({ flatPramsForm: { isUrgent } }: AppState): StateProps => ({ isUrgent }),
  (dispatch): DispatchProps => ({
    onChange: (): FlatParamsFormAction => dispatch(toggleIsUrgent()),
  }),
)(IsUrgentControl)
