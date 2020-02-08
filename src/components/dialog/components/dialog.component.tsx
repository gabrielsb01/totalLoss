import * as React from 'react'
import { Dialog as MuiDialog } from '@material-ui/core'
import { AppBar, Toolbar, Typography, DialogContent, DialogContentText, DialogActions, IconButton, Button } from "@material-ui/core"
import Close from '@material-ui/icons/Close'
import Error from '@material-ui/icons/ErrorOutline'
import { IProps, IStates } from './dialog.interface'
import classNames from 'classnames'
const styl: any = require("../css/dialog.component.styl")

const cx = classNames.bind(styl)

class Dialog extends React.Component<IProps, IStates> {
    constructor(props: any) {
        super(props)
        this.state = {
            openDialog: false
        }
    }
    handleClose = () => {
        const { afterClose } = this.props
        this.setState({ openDialog: false })
        if(afterClose){
            afterClose()
        }
    }
    componentWillReceiveProps(next: any) {
        const { open } = this.props
        if((open != next.open) && ( next.open != this.state.openDialog)){
            this.setState({ openDialog: next.open })
        }
    }
    render(){
        const { fullScreen, title, open } = this.props
        const { openDialog } = this.state
        return (
            <MuiDialog
                fullScreen={fullScreen}
                open={ openDialog }
                onClose={this.handleClose}
            >
                <AppBar position="static" className={cx('header')} >
                    <Toolbar className={cx('toobar')}>
                        <Typography variant="subtitle1" className={cx('title')} id="header-01">
                            <Error /> <span>{title}</span>
                        </Typography>
                        <IconButton className={cx('iconCloseButton')}  onClick={this.handleClose}>
                            <Close />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <DialogContent className={cx('content')}>
                    <DialogContentText>
                        Login e/ou senha inválida!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button className={cx('closeButton')} onClick={this.handleClose}>
                        Fechar
                    </Button>
                </DialogActions>
            </MuiDialog>
        )
    }
}

export default Dialog