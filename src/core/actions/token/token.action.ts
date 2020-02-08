import { 
    VERIFY_TOKEN_REQUEST,
    NOT_VERIFY_TOKEN
  } from '@core/config/constants/actionType.constant'

  
export const verifyToken = (token: string) => ({
    token,
    type: VERIFY_TOKEN_REQUEST
})

export const notVerify = () => ({
  type: NOT_VERIFY_TOKEN
})