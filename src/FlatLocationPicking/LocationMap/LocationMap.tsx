import React from 'react'
import { Marker } from 'react-google-maps'
import { LocationMapProps } from './container'
import GenericMap from './GenericMap'

const LocationMap = ({ markerPosition, ...rest }: LocationMapProps): JSX.Element => {
  const content = markerPosition
    .map(({ latitude: lat, longitude: lng }) => (
      // tslint:disable-next-line: jsx-key
      <Marker position={{ lat, lng }} />
    ))
    .orNull()

  return <GenericMap {...rest}>{content}</GenericMap>
}

export default LocationMap
