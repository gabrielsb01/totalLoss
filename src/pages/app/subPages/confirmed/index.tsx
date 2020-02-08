import * as React from 'react'
import Confirmed from './containers/confirmed.container'

class MainConfirmed extends React.Component <any, any> {
  render() {
    return (
      <Confirmed {...this.props} />
    )
  }
}

export default MainConfirmed
