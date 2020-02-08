import { call, put, takeEvery, select, fork } from 'redux-saga/effects'
import {
    VERIFY_TOKEN_REQUEST,
    VERIFY_TOKEN_SUCCESS,
    VERIFY_TOKEN_ERROR,
    UPDATE_CLAIM_REQUEST,
    UPDATE_CLAIM_SUCCESS,
    UPDATE_CLAIM_ERROR,
    FINALIZE_CLAIM_REQUEST,
    FINALIZE_CLAIM_ERROR,
    FINALIZE_CLAIM_SUCCESS
} from '@core/config/constants/actionType.constant'
import claimService from '@core/services/claim/claim.service'
import updateClaimService from '@core/services/claim/updateClaim.service'
import finalizeClaimService from '@core/services/claim/finalizeClaim.service'

function* getClaim(action: any) {
  try {
    const WAN = yield call(claimService, action.token)
    if(WAN.data.Incident.Status == 2){
      yield put({
        type: VERIFY_TOKEN_SUCCESS,
        payload: WAN.data,
        finalized: true
      })
    }
    else{
      yield put({
        type: VERIFY_TOKEN_SUCCESS,
        payload: WAN.data
      })
    }
  } catch (error) {
    yield put({ type: VERIFY_TOKEN_ERROR})
  }
}

function* updateClaim(action: any) {
  try {
    const store = yield select()
    const CLAIM = yield call(updateClaimService, action.values, store.claim.token)
    yield put({
      type: UPDATE_CLAIM_SUCCESS,
      payload: CLAIM.data
    })
  } catch (error) {
    yield put({
      type: UPDATE_CLAIM_ERROR
    })
  }
}

function* finalizeClaim(action: any) {
  try {
    const store = yield select()
    const FINALIZE = yield call(finalizeClaimService, store.claim.token)
    yield put({
      type: FINALIZE_CLAIM_SUCCESS,
      payload: FINALIZE.data
    })
  } catch (error) {
    yield put({
      type: FINALIZE_CLAIM_ERROR
    })
  }
}

function* claimSaga() {
    yield takeEvery(VERIFY_TOKEN_REQUEST, getClaim)
    yield takeEvery(UPDATE_CLAIM_REQUEST, updateClaim)
    yield takeEvery(FINALIZE_CLAIM_REQUEST, finalizeClaim)
}

export default claimSaga