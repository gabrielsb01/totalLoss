import * as React from 'react'
import { IProps, IStates } from './interfaces/panel.interface'
import Panel from './components/panel.component'

class PanelMain extends React.Component <IProps, IStates> {
  public render () {
    return (
      <Panel {...this.props} />
    )
  }
}

export default PanelMain
