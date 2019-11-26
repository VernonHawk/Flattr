import { ComponentProps } from 'react'
import React from 'react'
import { Marker } from 'react-google-maps'
import { connect } from 'react-redux'
import { AppState } from '../store'
import { FlatLocation, FlatLocationPickingAction, pickLocation } from './actions'
import GenericMap from './GenericMap'
import { defaultLocation } from './reducers'

type OwnProps = Omit<ComponentProps<typeof GenericMap>, 'defaultCenter' | 'defaultZoom'>

interface StateProps {
  readonly markerPosition: FlatLocation
}

interface DispatchProps {
  readonly onClick: (event: google.maps.MouseEvent) => FlatLocationPickingAction
}

export type LocationMapProps = OwnProps & StateProps & DispatchProps

const FlatLocationMap = ({ markerPosition, ...rest }: LocationMapProps): JSX.Element => (
  <GenericMap defaultCenter={flatLocationToLatLng(defaultLocation)} defaultZoom={11} {...rest}>
    <Marker position={flatLocationToLatLng(markerPosition)} />
  </GenericMap>
)

export default connect(
  ({ flatLocation }: AppState): StateProps => ({ markerPosition: flatLocation }),
  (dispatch): DispatchProps => ({
    onClick: ({ latLng }): FlatLocationPickingAction =>
      dispatch(pickLocation({ latitude: latLng.lat(), longitude: latLng.lng() })),
  }),
)(FlatLocationMap)

const flatLocationToLatLng = ({
  latitude: lat,
  longitude: lng,
}: FlatLocation): google.maps.LatLngLiteral => ({ lat, lng })
