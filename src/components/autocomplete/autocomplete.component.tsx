//React ecosystem
import * as React from 'react'
import Select from 'react-select'

//React interfaces
import { IProps, IStates } from './autocomplete.interface'

//Material UI
import Typography from '@material-ui/core/Typography'
import NoSsr from '@material-ui/core/NoSsr'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import MenuItem from '@material-ui/core/MenuItem'
import CancelIcon from '@material-ui/icons/Cancel'
import { emphasize } from '@material-ui/core/styles/colorManipulator'


//Components
import Input from '@components/input/input.component'

//css
const styl: any = require('./autocomplete.component.styl')
import classNames from 'classnames/bind'
const cx = classNames.bind(styl)

function ValueContainer(props) {
  return <div className={cx('valueContainer')}>{props.children}</div>;
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Option(props) {
  return (
    
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="span"
      
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function NoOptionsMessage(props) {

  const {inputValue} = props.selectProps

  if (inputValue.length >= 3) {
    return (
        <Typography
          className={cx('noOptions')}
          color="textSecondary"
          {...props.innerProps}
        >
          Não encontrado...
        </Typography>
    );
  }
  else {
    return (
      ""
    );
  }

}

function Control(props) {
  return (
      <TextField
        fullWidth
        className={cx('TextField')}
        InputProps={{
          inputComponent,
          inputProps: {
            className: cx('autoCompleteField'),
            inputRef: props.innerRef,
            children: props.children,
            ...props.innerProps,
          },
        }}
        {...props.selectProps.textFieldProps}
      />
  );
}

const components = {
  Control,
  ValueContainer,
  DropdownIndicator: null,
  NoOptionsMessage,
  Option
};

class AutoComplete extends React.Component <any, IStates> {
  state = {
    selectedOption: null,    
    filterOption : false
  }
  handleChange = (selectedOption) => {
    const {input} = this.props
    input.onChange(selectedOption)
    this.setState({selectedOption: selectedOption})
  }

  public render () {
    const { selectedOption } = this.state
    const { input, label, children, placeholder, disabled, required, meta: { touched, error },  ...custom } = this.props
    return (
      <Select
        placeholder={placeholder}
        options={children}
        className={cx('autoComplete')}
        value={input.value}
        isDisabled={disabled}
        textFieldProps={{
          label: label,
          InputLabelProps: {
            shrink: true,
          },
          error: touched && error,
          helperText: touched && error,
          required: required,
          disabled:disabled
        }}
        components={components}
        onChange={input.onChange}
        onBlur={() => input.onBlur(input.value)}
        isClearable
      />
    )
  }
}

export default AutoComplete
