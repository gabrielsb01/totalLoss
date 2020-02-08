import {
    GET_COLLABORATORS_SUCCESS
} from '@core/config/constants/actionType.constant';
  
const initialState: any = {
request: false,
success: false,
error: false,
collaborators: false
}
  
export default function (state = initialState, action: any) {
    switch (action.type) {
        case GET_COLLABORATORS_SUCCESS: 
            return {
                request: false,
                success: false,
                error: false,
                collaborators: action.payload
            }

        default:
            return state
    }
}
  