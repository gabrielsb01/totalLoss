import * as React from 'react'
import AuthContainer from './containers/auth.containers';

class AuthMain extends React.Component <any, any> { 
    render() {
        return (
            <AuthContainer {...this.props} /> 
        )
    }
} 

export default AuthMain
