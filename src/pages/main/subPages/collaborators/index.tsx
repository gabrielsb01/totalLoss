import * as React from 'react'
import Collaborators from './containers/collaborators.container'

class CollaboratorsMain extends React.Component <any, any> {
    render() {
        return <Collaborators {...this.props} />
    }
}

export default CollaboratorsMain