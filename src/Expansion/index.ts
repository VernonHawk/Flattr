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
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
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
  expandIcon: {
    marginBottom: -12,
  },
  expanded: {},
}))(ExpansionPanelSummary)
