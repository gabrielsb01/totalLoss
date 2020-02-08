import * as React from 'react'
import Main from './containers/main.container'

class MainWrapper extends React.Component<any,any> {
    render() {
        return <Main {...this.props}/>
    }
}

export default MainWrapper