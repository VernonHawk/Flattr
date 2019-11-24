import { ButtonProps } from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { AppState } from '../store'
import { GetFlatPriceAction, getFlatPriceRequest } from './actions'
import GetFlatPriceButton from './GetFlatPriceButton'

type OwnProps = ButtonProps

interface StateProps {
  readonly isLoading: boolean
  readonly isDisabled: boolean
}

interface DispatchProps {
  readonly onClick: () => GetFlatPriceAction
}

export type GetFlatPriceButtonProps = OwnProps & StateProps & DispatchProps

export default connect(
  ({ flatPrice: { isLoading } }: AppState): StateProps => ({ isLoading, isDisabled: isLoading }),
  (dispatch): DispatchProps => ({
    onClick: (): GetFlatPriceAction => dispatch(getFlatPriceRequest()),
  }),
)(GetFlatPriceButton)
