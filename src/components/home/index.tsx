import * as React from 'react'
import { HomeIProps, HomeIStates } from './interfaces/home.interface'
import Home from './containers/home.container'

class HomeMain extends React.Component<HomeIProps, HomeIStates> {
    render() {
        return (
            <Home {...this.props}/>
        )
    }
}

export default HomeMain