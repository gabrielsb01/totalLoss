import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
    GET_COLLABORATORS_REQUEST,
    GET_COLLABORATORS_SUCCESS,
    GET_COLLABORATORS_ERROR,
    UPDATE_COLLABORATORS_ERROR,
    UPDATE_COLLABORATORS_REQUEST,
    UPDATE_COLLABORATORS_SUCCESS,
    SET_COLLABORATORS_ERROR,
    SET_COLLABORATORS_REQUEST,
    SET_COLLABORATORS_SUCCESS
} from '@core/config/constants/actionType.constant'
import { collaboratorsService } from '@core/services/collaborators/collaborators.service'
import { setCollaboratorsService } from '@core/services/collaborators/setCollaborators.service'
import { updateCollaboratorsService } from '@core/services/collaborators/updateCollaborators.service'

function* getCollaboratorsSaga(action: any) {
  try {
        const store = yield select()
        const COLLABORATORS = yield call(collaboratorsService, store.auth.token )
        yield put({ type: GET_COLLABORATORS_SUCCESS, payload: COLLABORATORS.data })
  } catch (error) {
        yield put({ type: GET_COLLABORATORS_ERROR })
  }
}

function* updateProvidersSaga(action: any) {
    try {
          const store = yield select()
          const UPDATE = yield call(updateCollaboratorsService, store.auth.token, action.values )
          yield put({ type: GET_COLLABORATORS_REQUEST })
          yield put({ type: UPDATE_COLLABORATORS_SUCCESS })
    } catch (error) {
          yield put({ type: UPDATE_COLLABORATORS_ERROR })
    }
}

function* setProvidersSaga(action: any) {
    try {
          const store = yield select()
          const CREATE = yield call(setCollaboratorsService, store.auth.token, action.values )
          yield put({ type: GET_COLLABORATORS_REQUEST })
          yield put({ type: SET_COLLABORATORS_SUCCESS })
    } catch (error) {
          yield put({ type: SET_COLLABORATORS_ERROR })
    }
}




function* collaboratorsSaga() {
  yield takeEvery(GET_COLLABORATORS_REQUEST, getCollaboratorsSaga)
  yield takeEvery(UPDATE_COLLABORATORS_REQUEST, updateProvidersSaga)
  yield takeEvery(SET_COLLABORATORS_REQUEST, setProvidersSaga)
}

export default collaboratorsSaga
