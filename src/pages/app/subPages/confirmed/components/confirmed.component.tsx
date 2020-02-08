import * as React from 'react'

//Material.ui
import { Typography, Grid, Button } from '@material-ui/core'

//Images
const Obrigado: any = require('../../../../../assets/images/Obrigado.svg')

//CSS
const styl: any = require('../css/confirmed.styl')
import classNames from 'classnames/bind'
const cx = classNames.bind(styl)


class Confirmed extends React.Component<any, any> {
  render() {

    const { color, token, btnVerify } = this.props
    const style = {
      backgroundColor: `#${color}`,
    }

    return (
      <div className={cx('finalized_fnol')} style={style}>
        <div className={cx('blue_mask')} />
        <div className={cx('warning_circle')}>
          <img src={Obrigado} alt="Stop" id="thanks-01"/>
        </div>
        <div className={cx('block_text')}>
          <Typography
            className={cx('welcomeTitle')}
            align="center"
            variant="subtitle2"
            id="finish-02"
          >
            MUITO OBRIGADO
          </Typography>
          <p id="finish-03">
            Dados enviados com Sucesso
          </p>
          {
            btnVerify == 2 &&
            <Button 
                className={cx('confirmButton')} 
                color="default" 
                variant="contained" 
                fullWidth
                onClick={() => this.props.history.push(`/app/findAddress/?token=${token}`)}
            >
                Buscar o endereço do Pátio
            </Button>
          }
            
        </div>
      </div>
    )
  }
}

export default Confirmed
