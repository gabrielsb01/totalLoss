import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CLIENT_SET,
  CLIENT_UNSET,
  LOGIN_LOADING,
  SET_DATA_CONFIG,
  SET_TOKEN_AS_VALID,
  SET_TOKEN_AS_INVALID
} from '@core/config/constants/actionType.constant'
import { authService } from './../../../services/auth/auth.services';

function* callSubmit(action: any) {
  try {
    const LOGIN = yield call(authService, action.data)
    sessionStorage.setItem('token', LOGIN.data.data.token)
    yield put({ type: LOGIN_SUCCESS, payload: LOGIN.data.data.token})
  } catch (error) {
    yield put({ type: LOGIN_ERROR })
  }
}

function* logout() {
  try {
    yield sessionStorage.removeItem('token')
  } catch (error) {
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_REQUEST, callSubmit)
  yield takeEvery(CLIENT_UNSET, logout)
}

export default authSaga
