import {
    VERIFY_TOKEN_REQUEST, VERIFY_TOKEN_SUCCESS, VERIFY_TOKEN_ERROR,
    NOT_VERIFY_TOKEN, SEND_ANSWER_SUCCESS, FINALIZE_CLAIM_SUCCESS, UPDATE_CLAIM_SUCCESS, CLEAR_DATA
} from '@core/config/constants/actionType.constant'
  
const initialState = {
    token: '',
    save: false,
    finalized: false,
    request: true,
    success: false,
    error: false,
    claim: {
        Company: {},
        Incident: {}
    },
}
  
export default function (state = initialState, action: any) {
    switch (action.type) {
        case CLEAR_DATA:
            return {
                ...state,
                claim: {
                    Company: {},
                    Incident: {}
                }
            }

        case VERIFY_TOKEN_REQUEST: 
            return {
                ...state,
                token: action.token,
                request: true,
                success: false,
                error: false
            }

        case NOT_VERIFY_TOKEN: 
            return {
                ...state,
                request: false
            }

        case VERIFY_TOKEN_SUCCESS: 
            return {
                ...state,
                request: false,
                success: true,
                error: false,
                claim: action.payload,
                finalized: action.finalized
            }
            
        case UPDATE_CLAIM_SUCCESS: {
            return {
                ...state,
                claim: {
                    Incident: action.payload,
                    Company: state.claim.Company
                },
                save: true
            }
        }
        
        case VERIFY_TOKEN_ERROR: 
            return {
                ...state,
                token: '',
                request: false,
                success: false,
                error: true,
            }
        
        case SEND_ANSWER_SUCCESS: 
            return {
                ...state, 
                claim: {
                    Incident: action.payload,
                    Company: state.claim.Company
                }
            }
        
        case FINALIZE_CLAIM_SUCCESS: 
            return {
                ...state,
                claim: {
                    Incident: action.payload,
                    Company: state.claim.Company
                }
            }
        default:
        return state
    }
}
