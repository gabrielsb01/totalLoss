import * as React from 'react'
import Dashboard from './containers/dashboard.container'

class DashboardMain extends React.Component<any,any> {
    render () {
        return (
            <Dashboard  {...this.props} />
        )
    }
}

export default DashboardMain