import * as React from "react"
import { MenuIProps, MenuIStates } from "../interfaces/menuBottom.interface"
import { Tabs, Tab } from "@material-ui/core"
import { Description, CameraAlt, Subject, Check, Compare } from "@material-ui/icons"

//css
import classNames from 'classnames/bind'
const styl: any = require("./../css/menu.component.styl")
const cx = classNames.bind(styl)

class Menu extends React.Component<MenuIProps, MenuIStates> {
  constructor(props: MenuIProps) {
    super(props)
    this.state = {
    }
  }
  handleChange = (event: React.FormEvent<HTMLInputElement>, tabSelected: string): void => {
    this.changePage(tabSelected)
  }

  changePage = (page) => {
    this.props.history.push(page)
  }

  render() {
    const { page, token, claim } = this.props
    return (
      <React.Fragment>
        <Tabs
          value={page}
          className={cx('menu')}
          indicatorColor="primary"
          textColor="primary"
          classes={{ flexContainer: cx('tabs') }}
          onChange={this.handleChange}
        >
          <Tab icon={<Description />} label="Dados" value={`/app/claim/?token=${token}`}  />
          <Tab icon={<Subject />} label="Avarias" value={`/app/questions/?token=${token}`} />
          <Tab icon={<CameraAlt />} label="Fotos" value={`/app/fotos/?token=${token}`} disabled={(!claim.Incident.HasAnswer)} />
          <Tab icon={<Check />} label="Enviar" value={`/app/enviar/?token=${token}`} disabled={(!claim.Incident.HasAnswer)} />
        </Tabs>
      </React.Fragment>
    )
  }
}

export default Menu 
