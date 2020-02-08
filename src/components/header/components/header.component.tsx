import * as React from 'react'

//Materual.ui
import { AppBar, Toolbar, Typography } from "@material-ui/core"

//Interface
import { IHeaderProps } from '../interfaces/header.interface'

//style
import classNames from 'classnames/bind'
const styl: any = require("../css/header.component.styl")
const soleraLogo: any = require('../../../assets/images/Logo_Solera.svg')

const cx = classNames.bind(styl)

class Header extends React.Component<any, any> {
  componentDidMount() {
      const { finalized } = this.props
      if(finalized){
          this.props.history.push('/app/finalized')
      }
  }
  public render() {
    const { title, color, logoUrl, colorAuth, logoUrlAuth, verifity  } = this.props
    const style = {
      backgroundColor:  `#${color}`
    }

    return (
      <div>
        <AppBar position="static" style={style} className={cx('header')} id={`#${color}`} >
          <Typography variant="subtitle1" className={cx('title')} id="header-01">
            {title}
          </Typography>
        </AppBar>
        <div className={cx('logo')} id="header-02">
          <img className={cx('logoInsurance')} src={verifity == true?`data:image/jpeg;base64,${logoUrl}`:logoUrlAuth} id="header-03"/>
          <img src={soleraLogo} className={cx('logoSolera')} id="header-04"/>
        </div>
      </div>
    );
  }
}

export default Header
