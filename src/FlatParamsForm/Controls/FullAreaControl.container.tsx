import { StandardTextFieldProps } from '@material-ui/core/TextField'
import { None, Option, Some } from 'funfix-core'
import { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store'
import { subareasBiggerThanFullArea } from '../selectors'
import { changeFullArea, FlatParamsFormAction } from './actions'
import { FullAreaControl } from './AreaControls'

type OwnProps = StandardTextFieldProps

interface StateProps {
  readonly area: number
  readonly errorHint: Option<string>
}

interface DispatchProps {
  readonly onChange: (event: ChangeEvent<HTMLInputElement>) => FlatParamsFormAction
}

export type FullAreaControlProps = OwnProps & StateProps & DispatchProps

export default connect(
  ({ flatPramsForm }: AppState): StateProps => ({
    area: flatPramsForm.fullArea,
    errorHint: subareasBiggerThanFullArea(flatPramsForm)
      ? Some("Sum of subareas can't be bigger than the full area")
      : None,
  }),
  (dispatch): DispatchProps => ({
    onChange: (event): FlatParamsFormAction => dispatch(changeFullArea(event.target.value)),
  }),
)(FullAreaControl)
