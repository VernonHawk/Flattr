import React from 'react'
import { Marker } from 'react-google-maps'
import GenericMap from '../GenericMap'
import { LocationMapProps } from './container'

const LocationMap = ({
  markerPosition: { latitude: lat, longitude: lng },
  ...rest
}: LocationMapProps): JSX.Element => (
  <GenericMap {...rest}>
    <Marker position={{ lat, lng }} />
  </GenericMap>
)

export default LocationMap
