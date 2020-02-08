import * as React from 'react'
import Header from './containers/header.container'


class HeaderMain extends  React.Component<any, any >{
  public render() {
    return (
          <Header {...this.props}/>
    )
  }
}



export default HeaderMain
