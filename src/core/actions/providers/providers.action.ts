import { 
    GET_PROVIDERS_REQUEST,
    UPDATE_PROVIDERS_REQUEST,
    SET_PROVIDERS_REQUEST
} from '@core/config/constants/actionType.constant'

export const getTowingCompanies = () => ({
    type: GET_PROVIDERS_REQUEST
})

export const updateTowingCompanies = (values: any) => ({
    values,
    type: UPDATE_PROVIDERS_REQUEST
})

export const setTowingCompanies = (values: any) => ({
    values,
    type: SET_PROVIDERS_REQUEST
})