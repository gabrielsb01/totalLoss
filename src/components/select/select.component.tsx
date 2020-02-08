//React ecosystem
import * as React from 'react'

//React interfaces
import { IProps, IStates } from './select.interface'

//Material UI
import { FormControl, Select as MuiSelect, FormLabel, MenuItem, FormHelperText} from '@material-ui/core'

//css
const styl: any = require('./select.component.styl')
import classNames from 'classnames/bind'
const cx = classNames.bind(styl)

class Select extends React.Component <any, any> {
  public render () {
    const {
      input,
      label,
      meta: { touched, error },
      children,
      placeholder,
      required,
      noDefaultValue,
      ...custom
    } = this.props

    return (
      <div className={cx('selectMain')}>
        <FormControl className={cx('select')} required={required}>
          <FormLabel>{label}</FormLabel>
          <MuiSelect
            floatinglabeltext={label}
            className={cx('formControl')}
            {...input}
            onChange={this.handleChange.bind(this)}
            displayEmpty
            error={touched && error}
            {...custom}
          >
            {
              !noDefaultValue && 
              <MenuItem value=""></MenuItem>
            }
            {children}
          </MuiSelect>
          {touched && error && (
            <FormHelperText error={!!error}>
              {error}
            </FormHelperText>
          )}
        </FormControl>
      </div>
    )
  }
  handleChange(event) {
    const {input} = this.props
    const value = event.target.value
    input.onChange(value)
  }
}

export default Select as any
