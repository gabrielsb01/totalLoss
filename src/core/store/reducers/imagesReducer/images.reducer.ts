
import { DELETE_IMAGE_GALERIA, UPDATE_IMAGE_GALERIA_APP } from '@core/config/constants/actionType.constant'


const initialState: any = {
  images: [ ]
}

export default function (state = initialState, action: any) {
  switch (action.type) {
    case DELETE_IMAGE_GALERIA:
      return {
        ...state,
        images: action.images
      }

    case UPDATE_IMAGE_GALERIA_APP:
      return {
        ...state,
        images: action.images
      }

    default:
      return state
  }
}
