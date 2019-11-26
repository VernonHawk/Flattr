import { Option } from 'funfix-core'
import { ComponentProps } from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store'
import { FlatLocation, FlatLocationPickingAction, pickLocation } from '../actions'
import GenericMap from './GenericMap'
import LocationMap from './LocationMap'

type OwnProps = ComponentProps<typeof GenericMap>

interface StateProps {
  readonly markerPosition: Option<FlatLocation>
}

interface DispatchProps {
  readonly onClick: (event: google.maps.MouseEvent) => FlatLocationPickingAction
}

export type LocationMapProps = OwnProps & StateProps & DispatchProps

export default connect(
  ({ flatLocation: { location } }: AppState): StateProps => ({ markerPosition: location }),
  (dispatch): DispatchProps => ({
    onClick: ({ latLng }): FlatLocationPickingAction =>
      dispatch(pickLocation({ latitude: latLng.lat(), longitude: latLng.lng() })),
  }),
)(LocationMap)
