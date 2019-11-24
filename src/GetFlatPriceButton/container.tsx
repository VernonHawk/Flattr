import { ButtonProps } from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { AppState } from '../store'
import { getFlatPrice, GetFlatPriceButtonAction } from './actions'
import GetFlatPriceButton from './GetFlatPriceButton'

type OwnProps = ButtonProps

interface StateProps {}

interface DispatchProps {
  readonly onClick: () => GetFlatPriceButtonAction
}

export type GetFlatPriceButtonProps = OwnProps & StateProps & DispatchProps

export default connect(
  null,
  (dispatch): DispatchProps => ({
    onClick: (): GetFlatPriceButtonAction => dispatch(getFlatPrice()),
  }),
)(GetFlatPriceButton)
