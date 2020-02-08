import * as React from 'react'
import { FormControlLabel, Switch as MuiSwitch } from '@material-ui/core'
import classNames from 'classnames/bind'
import { IProps } from './switch.interface'
const styl: any = require('./switch.component.styl')

const cx = classNames.bind(styl)

class Switch extends React.Component<any, any> {
  public render() {
    const { input, label, ...custom } = this.props
    return (
      <FormControlLabel
        className={cx('switch')}
        control={
          <MuiSwitch
            checked={input.value}
            value={input.name}
            onClick={input.onChange}
            color={'primary'}
            id="continuar-conectado"
            {...custom}
          />
        }
        label={label}
        id="label-continuar-conectado"
      />
    )
  }
}

export default Switch
