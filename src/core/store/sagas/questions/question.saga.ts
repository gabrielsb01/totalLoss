import { call, put, takeEvery, fork, select } from 'redux-saga/effects'
import {
    GET_CATEGORY_BI_ID_REQUEST,
    GET_CATEGORY_BI_ID_SUCCESS,
    GET_CATEGORY_BI_ID_ERROR,
    GET_CATEGORY_SUCCESS,
    GET_CATEGORY_REQUEST,
    GET_CATEGORY_ERROR,
    SEND_ANSWER_REQUEST,
    SEND_ANSWER_SUCCESS,
    SEND_ANSWER_ERROR
} from '@core/config/constants/actionType.constant'
import categoriesService from '@core/services/categories/categories.service'
import categoriesByIdService from '@core/services/categories/categoriesById.service'
import sendAnswerService from '@core/services/categories/sendAnswer.service'

function* getQuestions(action: any) {
  try {
    const QUESTIONS = yield call(categoriesByIdService, action.id)
    let objectInitial = QUESTIONS.data
    let newParam = objectInitial.map(item => ({[`question-${item.Id}`]:`${item.Answer}`}))
    let selectInitial
    newParam.map(item => selectInitial = Object.assign(item, selectInitial))
    yield put({
      type: GET_CATEGORY_BI_ID_SUCCESS,
      payload: QUESTIONS.data,
      form: selectInitial
    })
  } catch (error) {
    yield put({ type: GET_CATEGORY_BI_ID_ERROR})
  }
}

function* getCategories(action:any) {
    try {
        const CATEGORIES = yield call(categoriesService, action.id)
        yield put({
          type: GET_CATEGORY_SUCCESS,
          payload: CATEGORIES.data
        })
      } catch (error) {
        yield put({ type: GET_CATEGORY_ERROR})
      }
}

function* sendAnswer(action: any) {
  try {
      const store = yield select()
      const SENDANSWER = yield call(sendAnswerService, action.answers, store.claim.token, action.auth)
      yield put({
        type: SEND_ANSWER_SUCCESS,
        payload: SENDANSWER.data
      })
  } catch (error) {
      yield put({
        type: SEND_ANSWER_ERROR
      })
  }
}

function* questionSaga() {
    yield takeEvery(GET_CATEGORY_BI_ID_REQUEST, getQuestions)
    yield takeEvery(GET_CATEGORY_REQUEST, getCategories)
    yield takeEvery(SEND_ANSWER_REQUEST, sendAnswer)
}

export default questionSaga