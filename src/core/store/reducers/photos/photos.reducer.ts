import { PHOTOS_CREATE_SUCCESS, PHOTOS_CREATE_ERROR, PHOTOS_CREATE_REQUEST, DELETE_PHOTO_REQUEST_APP, DELETE_PHOTO_REQUEST_DESK, MODAL_PHOTO, GALERY_PHOTO, UPDATE_IMAGE_GALERIA_APP } from '@core/config/constants/actionType.constant'

const initialState: any = {
  errorUpload: false,
  error: false,
  open: false,
  sending: false,
  requesting: false,
  successful: false,
  galery: []
}

export default function (state = initialState, action: any) {
  switch (action.type) {

    case GALERY_PHOTO:
      return {
        ...state,
        galery: action.payload,
        error: false,
        requesting: false,
        successful: true
      }

    case MODAL_PHOTO:
      return {
        ...state,
        open: action.payload
      }

    case PHOTOS_CREATE_SUCCESS:
      return {
        ...state,
        errorUpload: false,
        requesting: false,
        successful: true,
        open: false,
        sending: false
      }
    
    case PHOTOS_CREATE_REQUEST:
      return {
        ...state,
        requesting: false,
        successful: true,
        errorUpload: false,
        open: false,
      }

    case PHOTOS_CREATE_ERROR:
      return {
        ...state,
        errorUpload: true,
        requesting: false,
        successful: false,
        sending: false
      }

    case DELETE_PHOTO_REQUEST_APP:
      return {
        ...state,
        error: false,
        requesting: true,
        successful: false
      }
    
      case DELETE_PHOTO_REQUEST_DESK:
        return {
          ...state,
          error: false,
          requesting: true,
          successful: false
        }

    case UPDATE_IMAGE_GALERIA_APP: 
      return {
        ...state,
        sending: true
      }

    default:
      return state
  }
}
