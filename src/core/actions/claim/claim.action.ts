import { 
    UPDATE_CLAIM_REQUEST, FINALIZE_CLAIM_REQUEST, CLEAR_DATA
  } from '@core/config/constants/actionType.constant'

  
export const updateClaim = (values: object) => ({
    values,
    type: UPDATE_CLAIM_REQUEST
})

export const clearNewClaim = () => ({
    type: CLEAR_DATA
  })

export const finalizeClaim = () => ({
    type: FINALIZE_CLAIM_REQUEST
})