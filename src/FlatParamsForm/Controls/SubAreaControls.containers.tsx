import { StandardTextFieldProps } from '@material-ui/core/TextField'
import { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store'
import { changeKitchenArea, changeLivingArea, FlatParamsFormAction } from './actions'
import { KitchenAreaControl, LivingAreaControl } from './AreaControls'

type OwnProps = StandardTextFieldProps

interface StateProps {
  readonly area: number | ''
}

interface DispatchProps {
  readonly onChange: (event: ChangeEvent<HTMLInputElement>) => FlatParamsFormAction
}

export type AreaControlProps = OwnProps & StateProps & DispatchProps

export const LivingAreaControlContainer = connect(
  (state: AppState): StateProps => ({ area: state.flatPramsForm.livingArea.getOrElse('') }),
  (dispatch): DispatchProps => ({
    onChange: (event): FlatParamsFormAction => dispatch(changeLivingArea(event.target.value)),
  }),
)(LivingAreaControl)

export const KitchenAreaControlContainer = connect(
  (state: AppState): StateProps => ({
    area: state.flatPramsForm.kitchenArea.getOrElse(''),
  }),
  (dispatch): DispatchProps => ({
    onChange: (event): FlatParamsFormAction => dispatch(changeKitchenArea(event.target.value)),
  }),
)(KitchenAreaControl)
