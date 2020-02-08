import * as React from 'react'
import { Redirect } from 'react-router-dom'

//Material.ui
import { Grid } from '@material-ui/core'

//Components
import Dialog from '@components/dialog'
import Button from './button.component'

//CSS
import classNames from 'classnames/bind'
const styl: any = require('../css/auth.component.styl')
const cx = classNames.bind(styl)

//Imagem
const logo: any = require('../../../assets/images/Logo_Solera.svg')
const avisoFacil: any = require('../../../assets/images/aviso-facil.png')


class Former extends React.Component<any, any> {

    render() {
        const { submitLogin, pristine, submitting, invalid, fields, requesting, successful, denied, userData, tryAgain } = this.props
        return (
            <Grid container className={cx('login')} spacing={2}>
                {successful && <Redirect to="/main/dashboard" />}
                <Grid item xs={12} md={4}>
                    <form className={cx('former')} onSubmit={submitLogin}>
                        <div className={cx('formerInner')}>
                            <img className={cx('title')} src={logo} title="" id="form-logo-solera" />
                            <div className={cx('loginBox')}>
                                <img className={cx('title')} src={avisoFacil} title="" id="form-logo-aviso-facil"  />
                                {fields}
                            </div>
                        </div>
                        <Dialog title="Erro" open={denied} afterClose={ tryAgain } />
                        <Button type={'submit'} variant={'contained'} id="form-btn-acessar" disabled={pristine || submitting || invalid}>ACESSAR</Button>
                    </form>
                </Grid>
            </Grid>
        )
    }
}

export default Former