import { makeStyles } from '@material-ui/styles'
import React, { FC } from 'react'
import {
  GoogleMap,
  GoogleMapProps,
  withGoogleMap,
  WithGoogleMapProps,
  withScriptjs,
  WithScriptjsProps,
} from 'react-google-maps'

const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_API_KEY}`

const useStyles = makeStyles({
  mapElement: {
    height: '100%',
    width: '100%',
  },
})

type GenericMapProps = GoogleMapProps &
  Partial<WithGoogleMapProps> &
  Omit<WithScriptjsProps, 'googleMapURL'>

const GenericMap: FC<GenericMapProps> = (props): JSX.Element => {
  const classes = useStyles()

  return (
    <GoogleMapBase
      googleMapURL={googleMapURL}
      containerElement={<></>}
      mapElement={<div className={classes.mapElement} />}
      {...props}
    />
  )
}

const GoogleMapBase = withScriptjs(withGoogleMap(GoogleMap))

export default GenericMap
