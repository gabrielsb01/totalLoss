import * as React from 'react'
import Fotos from './containers/fotos.container'
import { FotosIProps, FotosIStates } from './interfaces/fotos.interface'

class FotosMain extends React.Component<FotosIProps, FotosIStates> {
    render () {
        return (
            <Fotos {...this.props} />
        )
    }
}

export default FotosMain