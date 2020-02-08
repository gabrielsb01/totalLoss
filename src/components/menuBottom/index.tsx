import * as React from 'react'
import Menu from './components/menu.component'
import { MenuIStates, MenuIProps } from './interfaces/menuBottom.interface'


class MenuBottomMain extends React.Component<MenuIProps, MenuIStates>{
  public render() {
    return (
      <Menu {...this.props} />
    )
  }
}



export default MenuBottomMain
