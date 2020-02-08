import {
  UPDATE_QUESTION_SCORE,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
  GET_CATEGORY_BI_ID_REQUEST,
  GET_CATEGORY_BI_ID_SUCCESS,
  CLEAR_CATEGORY_BI_ID
} from '@core/config/constants/actionType.constant'
  
  const initialState = {
    score: 0,
    quiz: [],
    question: false,
    form: {}
  }
  
  export default function (state = initialState, action: any) {
    switch (action.type) {
      case UPDATE_QUESTION_SCORE:
        return {
          ...state,
          score: action.score
        }

      case GET_CATEGORY_SUCCESS: 
        return {
          ...state,
          quiz: action.payload
        }
      
      case GET_CATEGORY_BI_ID_SUCCESS: 
        return {
          ...state,
          question: action.payload,
          form: action.form
        }

      case CLEAR_CATEGORY_BI_ID: 
        return {
          ...state,
          question: false
        }
  
      default:
        return state
    }
  }
  