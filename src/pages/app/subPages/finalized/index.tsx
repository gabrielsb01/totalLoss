import * as React from 'react'
import Finalized from './containers/finalized.container'
import { FinalizedIProps, FinalizedIStates } from './interfaces/finalized.interface'

class FinalizedMain extends React.Component<FinalizedIProps, FinalizedIStates> {
    render () {
        return (
            <Finalized {...this.props} />
        )
    }
}

export default FinalizedMain