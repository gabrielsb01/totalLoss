import * as React from 'react'
import Providers from './containers/providers.container'

class ProvidersMain extends React.Component <any, any> {
    render() {
        return <Providers {...this.props} />
    }
}

export default ProvidersMain