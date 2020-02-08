import { call, put, takeEvery, select, fork } from 'redux-saga/effects'
import {
    GET_PROVIDERS_REQUEST,
    GET_PROVIDERS_ERROR,
    GET_PROVIDERS_SUCCES,
    UPDATE_PROVIDERS_REQUEST,
    UPDATE_PROVIDERS_SUCCESS,
    UPDATE_PROVIDERS_ERROR,
    SET_PROVIDERS_REQUEST,
    SET_PROVIDERS_SUCCESS,
    SET_PROVIDERS_ERROR
} from '@core/config/constants/actionType.constant'
import { providersService } from '@core/services/providers/providers.service'
import { updateProvidersService } from '@core/services/providers/updateProvideres.service'
import { setProvidersService } from '@core/services/providers/setProviders.service'

function* getProvidersSaga(action: any) {
  try {
        const store = yield select()
        const PROVIDERS = yield call(providersService, store.auth.token )
        yield put({ type: GET_PROVIDERS_SUCCES, payload: PROVIDERS.data })
  } catch (error) {
        yield put({ type: GET_PROVIDERS_ERROR })
  }
}

function* updateProvidersSaga(action: any) {
    try {
          const store = yield select()
          const UPDATE = yield call(updateProvidersService, store.auth.token, action.values )
          yield put({ type: GET_PROVIDERS_REQUEST })
          yield put({ type: UPDATE_PROVIDERS_SUCCESS })
    } catch (error) {
          yield put({ type: UPDATE_PROVIDERS_ERROR })
    }
}

function* setProvidersSaga(action: any) {
    try {
          const store = yield select()
          const CREATE = yield call(setProvidersService, store.auth.token, action.values )
          yield put({ type: GET_PROVIDERS_REQUEST })
          yield put({ type: SET_PROVIDERS_SUCCESS })
    } catch (error) {
          const ALERT = error.response.data.Message
          yield put({ type: SET_PROVIDERS_ERROR, message:ALERT})
          
    }
}



function* providersSaga() {
  yield takeEvery(GET_PROVIDERS_REQUEST, getProvidersSaga)
  yield takeEvery(UPDATE_PROVIDERS_REQUEST, updateProvidersSaga)
  yield takeEvery(SET_PROVIDERS_REQUEST, setProvidersSaga)
}

export default providersSaga
