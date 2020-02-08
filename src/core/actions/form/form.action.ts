import { SEND_CLAIM_REQUEST, CHECK_IF_IS_VALID_TOKEN, RESET_FORM } from '@core/config/constants/actionType.constant'


// Forgot
export const sendClaim = (data: any, activeType: number) => ({
  payload: { data, activeType },
  type: SEND_CLAIM_REQUEST
});


//reset
export const resetClaim = () => ({
  type: RESET_FORM
});


// export const checkIfIsValidToken = (token: string) => ({
//   payload: token,
//   type: CHECK_IF_IS_VALID_TOKEN
// })