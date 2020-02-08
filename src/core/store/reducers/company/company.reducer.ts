import {
    GET_COMPANY_SUCCESS,
    GET_COMPANY_REQUEST,
    GET_COMPANY_ERROR
} from '@core/config/constants/actionType.constant'

const initialState = {
    token: '',
    request: true,
    success: false,
    error: false,
    company: {},
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case GET_COMPANY_REQUEST: 
            return {
                ...state,
                token: action.token,
                request: true,
                success: false,
                error: false
            }

        case GET_COMPANY_SUCCESS: 
            return {
                ...state,
                request: false,
                success: true,
                error: false,
                company: action.payload
            }
        
        case GET_COMPANY_ERROR: 
            return {
                request: false,
                success: false,
                error: true,
            }
        default:
        return state
    }
}
