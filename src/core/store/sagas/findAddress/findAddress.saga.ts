import { call, put, takeEvery } from 'redux-saga/effects'
import {
    GET_COMPANY_SUCCESS,
    GET_COMPANY_REQUEST,
    GET_COMPANY_ERROR,
    GET_LOCATIONS_SUCCESS,
    GET_LOCATIONS_REQUEST,
    GET_LOCATIONS_ERROR

} from '@core/config/constants/actionType.constant'
import company from '@core/services/company/company.service'
import locations from '@core/services/locations/locations.service'

function* getCompany(action: any) {
  try {
    const ID = yield call(company, action.id)
    const LOCATIONS = yield call(locations, ID.data[0].Id)
    // yield put({
    //   type: GET_COMPANY_SUCCESS,
    //   payload: ID.data
    // })
    yield put({
      type: GET_LOCATIONS_SUCCESS,
      payload: LOCATIONS.data
    })
  } catch (error) {
    yield put({ type: GET_COMPANY_ERROR})
  }
}

// function* getLocations(action: any) {
//   try {
//     const ID = yield call(locations, action.id)
//     
//     yield put({
//       type: GET_LOCATIONS_SUCCESS,
//       payload: ID.data
//     })
//   } catch (error) {
//     yield put({ type: GET_LOCATIONS_ERROR})
//   }
// }

function* findAddressSaga() {
    yield takeEvery(GET_COMPANY_REQUEST, getCompany)
    //yield takeEvery(GET_LOCATIONS_REQUEST, getLocations)
}

export default findAddressSaga