//React Ecosystem 
import * as React from 'react'
//Interfaces
import { HomeIProps, HomeIStates } from './../interfaces/home.interface'
// css
import classNames from "classnames/bind"
const styl: any = require('../css/home.component.styl')
const cx = classNames.bind(styl)
//Material 
import { CircularProgress, Button } from '@material-ui/core'

import { delay } from '../../../core/helpers/timer.helper'

class Home extends React.Component<HomeIProps, HomeIStates> {
    render() {
        return (
            <React.Fragment>
                <div className={cx('authWall')}>
                    {
                        <div className={cx('sending')}>
                            <CircularProgress color="secondary" size={120} thickness={1} />
                            <span>buscando...</span>
                        </div>
                    }
                    <div className={cx('authSoleraLogo')}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Home