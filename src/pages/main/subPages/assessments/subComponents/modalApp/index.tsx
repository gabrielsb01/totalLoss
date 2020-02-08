import * as React from 'react'
import ModalAdd from './containers/modalAdd.container'

class ModalAddMain extends React.Component<any, any> {
    render() {
        return (
            <ModalAdd {...this.props} /> 
        )
    }
}

export default ModalAddMain