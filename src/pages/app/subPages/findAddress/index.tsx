import * as React from 'react'
import FindAddress from './containers/find.container'

class FindAddressMain extends React.Component <any, any> {
    render () {
        return <FindAddress {...this.props} />
    }
}

export default FindAddressMain