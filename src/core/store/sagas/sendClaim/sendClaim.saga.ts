import {
  SEND_CLAIM_REQUEST,
  SEND_CLAIM_SUCCESS,
  SEND_CLAIM_ERROR
} from '@core/config/constants/actionType.constant'
import { takeLatest, call, put, select } from 'redux-saga/effects'
import { sendClaim } from '@core/services/form/form.services'
import { smsService } from '@core/services/sms/sms.service'

function* callSubmit(action: any) {
  try {
    const store = yield select()
    const requestData = yield call(sendClaim, action.payload.data, store.auth.token)
    if(action.payload.activeType){
      const sms = yield call(smsService, store.auth.token, requestData.data.Key)
    }
    yield put({ type: SEND_CLAIM_SUCCESS })
  } catch (error) {
    yield put({ type: SEND_CLAIM_ERROR })
  }
}

function* sendClaimSaga() {
  yield takeLatest(SEND_CLAIM_REQUEST, callSubmit)
}

export default sendClaimSaga
