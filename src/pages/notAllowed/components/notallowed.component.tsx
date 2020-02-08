//React Ecosystem 
import * as React from 'react'
//Interfaces
import { NotAllowedIProps, NotAllowedIStates } from './../interfaces/notallowed.interface'
// css
import classNames from "classnames/bind"
const styl: any = require('../css/notallowed.component.styl')
const cx = classNames.bind(styl)
//Material 
import { CircularProgress, Button } from '@material-ui/core'

class NotAllowed extends React.Component<NotAllowedIProps, NotAllowedIStates> {
    render() {
        return (
            <React.Fragment>
                <div className={cx('authWall')}>
                    {
                        <div className={cx('sending')}>
                            <span>Não encontramos seu Aviso...</span>
                        </div>
                    }
                    <div className={cx('authSoleraLogo')}/>
                </div>
            </React.Fragment>
        )
    }
}

export default NotAllowed