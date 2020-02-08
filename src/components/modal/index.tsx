import * as React from 'react'
import { IProps, IStates } from './interfaces/modal.interface'
import Modal from './component/modal.component'

class ModalMain extends React.Component <IProps, IStates> {
  public render () {
    return (
      <Modal {...this.props} />
    )
  }
}

export default ModalMain
