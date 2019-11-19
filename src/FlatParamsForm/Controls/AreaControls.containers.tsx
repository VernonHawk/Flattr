import { StandardTextFieldProps } from '@material-ui/core/TextField'
import { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store'
import {
  changeFullArea,
  changeKitchenArea,
  changeLivingArea,
  FlatParamsFormAction,
} from '../actions'
import { FullAreaControl, KitchenAreaControl, LivingAreaControl } from './AreaControls'

type OwnProps = StandardTextFieldProps

interface StateProps {
  readonly area: number | ''
}

interface DispatchProps {
  readonly onChange: (event: ChangeEvent<HTMLInputElement>) => FlatParamsFormAction
}

export type AreaControlProps = OwnProps & StateProps & DispatchProps

export const FullAreaControlContainer = connect(
  ({ flatPramsForm: { fullArea: area } }: AppState): StateProps => ({ area }),
  (dispatch): DispatchProps => ({
    onChange: (event): FlatParamsFormAction => dispatch(changeFullArea(event.target.value)),
  }),
)(FullAreaControl)

export const LivingAreaControlContainer = connect(
  ({ flatPramsForm: { livingArea } }: AppState): StateProps => ({ area: livingArea.getOrElse('') }),
  (dispatch): DispatchProps => ({
    onChange: (event): FlatParamsFormAction => dispatch(changeLivingArea(event.target.value)),
  }),
)(LivingAreaControl)

export const KitchenAreaControlContainer = connect(
  ({ flatPramsForm: { kitchenArea } }: AppState): StateProps => ({
    area: kitchenArea.getOrElse(''),
  }),
  (dispatch): DispatchProps => ({
    onChange: (event): FlatParamsFormAction => dispatch(changeKitchenArea(event.target.value)),
  }),
)(KitchenAreaControl)
