import { 
    GET_CATEGORY_BI_ID_REQUEST,
    GET_CATEGORY_REQUEST,
    SEND_ANSWER_REQUEST,
    CLEAR_CATEGORY_BI_ID
  } from '@core/config/constants/actionType.constant'
  
  export const selectCategory = (id: number) => ({
    id,
    type: GET_CATEGORY_BI_ID_REQUEST
  })

  export const getCategories = (id: number) => ({
    id,
    type: GET_CATEGORY_REQUEST
  })

  export const sendAnswers = (answers: any, auth?: string) => ({
    answers,
    auth,
    type: SEND_ANSWER_REQUEST
  })

  export const clearQuestions = () => ({
    type: CLEAR_CATEGORY_BI_ID
  })