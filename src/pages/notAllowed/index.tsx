import * as React from 'react'
import { NotAllowedIProps, NotAllowedIStates } from './interfaces/notallowed.interface'
import NotAllowed from './components/notallowed.component'

class NotAllowedMain extends React.Component<NotAllowedIProps, NotAllowedIStates> {
    render() {
        return (
            <NotAllowed {...this.props}/>
        )
    }
}

export default NotAllowedMain