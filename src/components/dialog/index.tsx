import * as React from 'react'
import Dialog from './components/dialog.component'
import { IProps, IStates } from './components/dialog.interface';

class DialogMain extends React.Component <IProps, IStates> {
    render() {
        return (
            <Dialog {...this.props} />
        )
    }
}

export default DialogMain