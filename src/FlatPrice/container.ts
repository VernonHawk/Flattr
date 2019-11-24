import { BoxProps } from '@material-ui/core/Box'
import { connect } from 'react-redux'
import { AppState } from '../store'
import FlatPrice from './FlatPrice'

export enum FlatPriceDisplayType {
  Hidden = 'Hidden',
  Loading = 'Loading',
  Visible = 'Visible',
}

type OwnProps = BoxProps

interface StateProps {
  readonly price: number
  readonly displayType: FlatPriceDisplayType
}

export type FlatPriceProps = OwnProps & StateProps

export default connect(
  // prettier-ignore
  ({ flatPrice: { isLoading, price } }: AppState): StateProps => ({
    price: price.getOrElse(0),
    displayType:
      isLoading       ? FlatPriceDisplayType.Loading :
      price.isEmpty() ? FlatPriceDisplayType.Hidden :
      /* otherwise */   FlatPriceDisplayType.Visible,
  }),
)(FlatPrice)
