import { LOGIN_REQUEST, LOGIN_TRY_AGAIN, CLEAR_AUTH, LOGOFF } from '@core/config/constants/actionType.constant'


export const userAuth = (data: String[]) => {
  return ({
  data,
  type: LOGIN_REQUEST
})
}

export const tryAgain = () => {
  return ({
  type: LOGIN_TRY_AGAIN
})
}

export const clearAuth = ( ) => ({
  type: CLEAR_AUTH
})

export const logoff = () => ({
  type: LOGOFF
})
