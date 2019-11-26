import React, { ComponentProps, FC } from 'react'
import GenericMap from './GenericMap'

type KyivMapProps = Omit<ComponentProps<typeof GenericMap>, 'defaultZoom' | 'defaultCenter'>

const NaUKMACoords = { lat: 50.464203, lng: 30.519828 }

const KyivMap: FC<KyivMapProps> = (props): JSX.Element => (
  <GenericMap defaultZoom={11} defaultCenter={NaUKMACoords} {...props} />
)

export default KyivMap
