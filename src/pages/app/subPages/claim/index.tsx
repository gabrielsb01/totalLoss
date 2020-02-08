import * as React from 'react'
import { ClaimIProps, ClaimIStates } from './interfaces/claim.interface'
import Claim from './containers/claim.container'

class ClaimMain extends React.Component <ClaimIProps, ClaimIStates> {
    render () {
        return <Claim {...this.props} />
    }
}

export default ClaimMain