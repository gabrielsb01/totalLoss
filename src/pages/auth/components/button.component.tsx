import * as React from 'react'
import { Button as MuiButton } from '@material-ui/core'
import classNames from 'classnames'
const styl: any = require('../css/auth.component.styl')

const cx = classNames.bind(styl)

class Button extends React.Component <any, any> { 
    render () {
        const { children, ...custom } = this.props
        return (
            <MuiButton {...custom} className={cx('button')} fullWidth>{children}</MuiButton>
        )
    }
}

export default Button