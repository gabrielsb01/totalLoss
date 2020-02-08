import { LISTPHOTOS_CREATE_REQUEST, UPDATE_IMAGE_GALERIA_DESk, UPDATE_IMAGE_GALERIA_APP, MODAL_PHOTO, PHOTOS_CREATE_REQUEST, DELETE_PHOTO_REQUEST_APP, DELETE_PHOTO_REQUEST_DESK } from '@core/config/constants/actionType.constant'

export const updateGaleryApp = (file: any) => ({
  file,
  type: UPDATE_IMAGE_GALERIA_APP
})

export const updateGaleryDesk = (file: any) => ({
  file,
  type: UPDATE_IMAGE_GALERIA_DESk
})

export const OpenModal = (payload: any) => ({
  payload,
  type: MODAL_PHOTO
})

export const GaleryPhoto = () => ({
  type: PHOTOS_CREATE_REQUEST
})

export const ListPhoto = () => ({
  type: LISTPHOTOS_CREATE_REQUEST
})

export const deletePhotoApp = (token: string, id: string) => ({
  token,
  id,
  type: DELETE_PHOTO_REQUEST_APP
})

export const deletePhotoDesk = (token: string, id: string) => ({
  token,
  id,
  type: DELETE_PHOTO_REQUEST_DESK
})