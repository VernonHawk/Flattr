import { BoxProps } from '@material-ui/core/Box'
import React, { ReactNode } from 'react'
import { connect } from 'react-redux'
import { AppState } from '../store'
import {
  FlatPrice,
  FlatPriceContainer,
  FlatPriceEmpty,
  FlatPriceError,
  LoadingFlatPrice,
} from './FlatPrice'

export enum FlatPriceDisplayType {
  Hidden = 'Hidden',
  Loading = 'Loading',
  Visible = 'Visible',
}

type OwnProps = BoxProps

interface StateProps {
  readonly component: ReactNode
}

export type FlatPriceContainerProps = OwnProps & StateProps

export interface FlatPriceProps {
  readonly price: number
}

export default connect(
  // prettier-ignore
  ({ flatPrice: { isLoading, price, wasError } }: AppState): StateProps => ({
    component:
      isLoading       ? <LoadingFlatPrice /> :
      wasError        ? <FlatPriceError /> :
      price.isEmpty() ? <FlatPriceEmpty /> :
      /* otherwise */   <FlatPrice price={price.get()} />,
  }),
)(FlatPriceContainer)
