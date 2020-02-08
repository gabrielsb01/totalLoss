import * as React from "react"
import {
  IconButton,
  TextField,
  Input as MuiInput,
  InputAdornment,
  FormControl,
} from "@material-ui/core"
import * as Icons from "@material-ui/icons"
import { IProps, IStates } from "./input.interface"
const styl: any = require('./input.component.styl')
import classNames from "classnames/bind"
const config: any = require('@core/config/constants/general.constant')

const cx = classNames.bind(styl);
class Input extends React.Component<any, any, IStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      showPassword: false
    };
  }

  public handleMouseDownPassword = (event: any) => event.preventDefault();

  public handleClickShowPassword = () =>
    this.setState(state => ({ showPassword: !state.showPassword }));

  public render() {
    const {
      input,
      password,
      value,
      control,
      label,
      placeholder,
      maxLength,
      meta: { touched, error },
      ...custom
    } = this.props;      
    if (control) {
      return (
        <div>
          <TextField
            className={cx({ textField: true })}
            placeholder={label}            
            error={touched && error ? true : false}
            fullWidth            
            {...input}
            {...custom}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icons.PermIdentity />
                </InputAdornment>
              )
            }}
          />
        </div>
      );
    }

    return (
      <FormControl
        className={cx({ textField: true })}
        margin={"normal"}
        required={input.required}
        fullWidth
      >
        {password ? (
          <TextField
            placeholder={label}
            className={cx({ MuiInput: true })}
            {...input}
            {...custom}
            error={touched && error ? true : false}
            type={this.state.showPassword ? "text" : "password"}            
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icons.LockOutlined />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                  >
                    {this.state.showPassword ? (
                      <Icons.VisibilityOff id="icon-invisible" />
                    ) : (
                      <Icons.Visibility id="icon-visible"/>
                    )}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        ) : (
          <TextField
            className={cx({ textField: true })}
            label={label}
            placeholder={placeholder}
            InputLabelProps={{
              shrink: true,              
            }}
            inputProps={{
              maxLength : maxLength
            }}
            error={touched && error ? true : false}
            fullWidth
            value={value}
            helperText={ touched && error }
            {...input}
            {...custom}
          />
        )}
      </FormControl>
    );
  }
}

export default Input;
