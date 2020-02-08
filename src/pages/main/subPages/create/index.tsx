import * as React from 'react'
import CreateClaim from './containers/createClaim.container'

class CreateClaimMain extends React.Component<any, any> {
    render() {
        return (
            <CreateClaim {...this.props} />
        )
    }
}

export default CreateClaimMain