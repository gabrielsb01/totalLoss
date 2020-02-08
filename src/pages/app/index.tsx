import * as React from 'react'
import AppContainer from './containers/app.container'

class AppComponentMain extends React.Component<any, any> {
    render() {
        return (
            <AppContainer {...this.props } />
        )
    }
}

export default AppComponentMain