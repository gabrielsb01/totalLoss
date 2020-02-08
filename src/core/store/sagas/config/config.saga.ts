import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
    GET_CONFIG_REQUEST,
    GET_CONFIG_SUCCESS,
    GET_CONFIG_ERROR,
    LOGIN_SUCCESS
} from '@core/config/constants/actionType.constant'
import { configService } from '@core/services/config/config.service'

function* getConfigSaga(action: any) {
  try {
        const store = yield select()
        const sessionToken = sessionStorage.getItem('token')
        const token = sessionToken ? sessionToken : store.auth.token
        const CONFIG = yield call(configService, token)
        if(!store.auth.token){
            yield put({ type: LOGIN_SUCCESS, payload: sessionToken })
        }
        yield put({type: GET_CONFIG_SUCCESS, payload: CONFIG.data })
  } catch (error) {
      yield put({ type: GET_CONFIG_ERROR })
  }
}

function* configSaga() {
  yield takeEvery(GET_CONFIG_REQUEST, getConfigSaga)
}

export default configSaga
