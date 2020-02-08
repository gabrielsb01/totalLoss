import { 
    GET_COMPANY_REQUEST,
    GET_LOCATIONS_REQUEST
  } from '@core/config/constants/actionType.constant'

  export const getCompany = (id: number) => ({
    id,
    type: GET_COMPANY_REQUEST
  })

  export const getLocations = (id: number) => ({
    id,
    type: GET_LOCATIONS_REQUEST
  })