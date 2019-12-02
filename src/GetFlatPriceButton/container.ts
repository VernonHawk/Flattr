import { ButtonProps } from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { subareasBiggerThanFullArea } from '../FlatParamsForm/selectors'
import { GetFlatPriceAction, getFlatPriceRequest } from '../FlatPrice/actions'
import { AppState } from '../store'
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
  ({ flatPrice: { isLoading }, flatPramsForm }: AppState): StateProps => ({
    isLoading,
    isDisabled: isLoading || subareasBiggerThanFullArea(flatPramsForm),
  }),
  (dispatch): DispatchProps => ({
    onClick: (): GetFlatPriceAction => dispatch(getFlatPriceRequest()),
  }),
)(GetFlatPriceButton)
