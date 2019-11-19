import { TextFieldProps } from '@material-ui/core/TextField'
import { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store'
import { changeRooms, FlatParamsFormAction } from '../actions'
import RoomsControl from './RoomsControl'

type OwnProps = TextFieldProps

interface StateProps {
  readonly rooms: number
}

interface DispatchProps {
  readonly onChange: (event: ChangeEvent<HTMLInputElement>) => FlatParamsFormAction
}

export type RoomsControlProps = OwnProps & StateProps & DispatchProps

export default connect(
  ({ flatPramsForm: { rooms } }: AppState): StateProps => ({ rooms }),
  (dispatch): DispatchProps => ({
    onChange: (event): FlatParamsFormAction => dispatch(changeRooms(event.target.value)),
  }),
)(RoomsControl)
