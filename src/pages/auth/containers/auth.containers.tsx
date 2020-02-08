import { connect } from 'react-redux'
import Auth from '../components/auth.component'
import { userAuth, tryAgain, clearAuth } from '@core/actions/auth/auth.action'
import {  getConfigAction } from '@core/actions/config/config.action'


const mapStateToProps = (state: any) => {
  return {
    formValues: state.form.Auth ? state.form.Auth.values : '',
    requesting: state.auth.requesting,
    successful: state.auth.successful,
    denied: state.auth.denied,
    userData: state.auth.userData
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    userAuth: (data: String[]) => {
      dispatch(userAuth(data))
    },
    getConfigAction: () => {
      dispatch(getConfigAction())
    },
    tryAgain: () => {
      dispatch(tryAgain())
    },
    clearAuth: () => {
      dispatch(clearAuth())
    }
  }
}

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)

export default AuthContainer