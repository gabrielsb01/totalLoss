import * as React from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton
} from '@material-ui/core'
import { Link } from "react-router-dom"
import { IProps, IStates } from '../interfaces/modal.interface'
import { CheckCircleOutline, Close, InfoOutlined } from '@material-ui/icons'

import classNames from 'classnames/bind'
const styl: any = require('../css/modal.component.styl')
const cx = classNames.bind(styl)


class Modal extends React.Component<IProps, IStates>{

  setIcon(){
    const { typeModal } = this.props
    if(typeModal == 'success'){
      return(
      <Grid id='containerIcon' item xs={1}>
        <CheckCircleOutline id='iconModal' />
      </Grid>
      )
    }
    if(typeModal == 'error' || typeModal == 'attention'){
      return(
      <Grid id='containerIcon' className={cx("containerIcon")} item xs={1}>
        <InfoOutlined id='iconModal' />
      </Grid>
      )
    }
    if(typeModal == 'info'){
      return(
        <Grid id='containerIcon' item xs={1}>
          <InfoOutlined id='iconModal' />
        </Grid>
      )
    }
    return
  }

  render() {
    const { title, children, actions, actionClose, open, fullScreenModal, secondIcon, typeModal, id, maxWidth, className } = this.props
    return (
      <React.Fragment >
        <Dialog
          open={open}
          onClose={() => this.props.gallery()}
          fullScreen={fullScreenModal}
          className={cx('modal', className)}
          id={id}
          maxWidth={maxWidth}
        >
          
          <DialogContent className={cx('containerBody', className)} id={`${id}_containerBody`}>
            <DialogContentText className={cx("bodyModal")} id={`${id}_bodyModal`} >
              {children}
            </DialogContentText>
          </DialogContent>
           {
             actions &&
              <DialogActions className={cx('actions')} id={`${id}_actions`}>
                {actions}
              </DialogActions>
           }

        </Dialog>
      </React.Fragment>
    )
  }
}


export default Modal
