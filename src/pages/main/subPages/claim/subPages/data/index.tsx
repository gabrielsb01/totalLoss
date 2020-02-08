import * as React from 'react'
import Data from './containers/data.container'

class DataMain extends React.Component<any, any> {
    render() {
        return (
            <Data {...this.props} />
        )
    }
}

export default DataMain