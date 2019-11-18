import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  withStyles,
} from '@material-ui/core'

export const Expansion = withStyles(() => ({
  root: {
    boxShadow: 'none',
  },
}))(ExpansionPanel)

export const ExpansionDetails = withStyles(() => ({
  root: {
    padding: 0,
  },
}))(ExpansionPanelDetails)

export const ExpansionSummary = withStyles(() => ({
  root: {
    padding: 0,
    display: 'inline-flex',
    '&$expanded': {
      minHeight: 0,
    },
  },
  content: {
    margin: 0,
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
}))(ExpansionPanelSummary)
