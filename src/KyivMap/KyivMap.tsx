import React, { FC } from 'react'
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps'

type KyivMapProps = Omit<React.ComponentProps<typeof GenericMap>, 'googleMapURL'>

const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_API_KEY}`

const NaUKMACoords = { lat: 50.464203, lng: 30.519828 }

const KyivMap: FC<KyivMapProps> = ({ children, ...rest }): JSX.Element => (
  <GenericMap defaultZoom={10} defaultCenter={NaUKMACoords} googleMapURL={googleMapURL} {...rest}>
    {children}
  </GenericMap>
)

const GenericMap = withScriptjs(withGoogleMap(GoogleMap))

export default KyivMap
