import { all, call, put, takeLatest, select } from 'redux-saga/effects'
import { SEND_CLAIM_REQUEST, LISTPHOTOS_CREATE_REQUEST, DELETE_PHOTO_ERROR, UPDATE_IMAGE_GALERIA_DESk, UPDATE_IMAGE_GALERIA_APP, PHOTOS_CREATE_SUCCESS, PHOTOS_CREATE_ERROR, GALERY_PHOTO, PHOTOS_CREATE_REQUEST, DELETE_PHOTO_REQUEST_APP, DELETE_PHOTO_REQUEST_DESK } from '@core/config/constants/actionType.constant'
import uploadPhotoService from '@core/services/photos/uploadPhoto.service'
import listPhotoService from '@core/services/photos/listPhoto.service'
import photoService from '@core/services/photos/photo.service'
import deletePhotoService from '@core/services/photos/deletePhoto.service'
import listGalleryService from '@core/services/gallery/listGallery.service'
import galleryPhotosService from '@core/services/gallery/galleryPhotos.service'


function* savePhotos(action: any) {
  try {
    const store = yield select()
    yield call( uploadPhotoService, action.file, store.claim.claim.Incident.Key)
    yield put({ type: PHOTOS_CREATE_REQUEST})
    yield put ({ type: SEND_CLAIM_REQUEST })
  }catch (error) {
    yield put({ type: PHOTOS_CREATE_ERROR})
  }
}

function* savePhotosDesk(action: any) {
  try {
    const store = yield select()
    yield call( uploadPhotoService, action.file, store.claim.claim.Incident.Key, store.auth.token)
    yield put({ type: LISTPHOTOS_CREATE_REQUEST})
    yield put ({ type: SEND_CLAIM_REQUEST })
  }catch (error) {
    yield put({ type: PHOTOS_CREATE_ERROR})
  }
}

function* getImages(action: any) {
  
  try {
    
    const store = yield select()
    const ID_GALERY = yield call( listGalleryService, store.claim.claim.Incident.Key, store.auth.token )
    const PHOTOS = yield all(ID_GALERY.data.Page.map(data => {
      const id = data.Id
      
        return call(galleryPhotosService, store.claim.claim.Incident.Key, id, store.auth.token)
      
    }))

    let arrayPhotos = new Array()
      PHOTOS.map((data) => {
        const id = data && data.data
        arrayPhotos.push({'data': id})
      })

    yield put({ type: GALERY_PHOTO, payload: arrayPhotos})
    yield put({ type: PHOTOS_CREATE_SUCCESS})
  }catch (error) {
    yield put({ type: PHOTOS_CREATE_ERROR})
  }
}

function* getPhotos(action: any){
  try {
    const store = yield select()
    const ID_GALERY = yield call( listPhotoService, store.claim.claim.Incident.Key )
    const PHOTOS = yield all(ID_GALERY.data.Page.map(data => {
      const id = data.Id
      
        return call(photoService, store.claim.claim.Incident.Key, id)
      
    }))

    let arrayPhotos = new Array()
      PHOTOS.map((data) => {
        const id = data && data.data
        arrayPhotos.push({'data': id})
      })

    yield put({ type: GALERY_PHOTO, payload: arrayPhotos})
    yield put({ type: PHOTOS_CREATE_SUCCESS})
  }catch (error) {
    yield put({ type: PHOTOS_CREATE_ERROR})
  }

}

function* deletePhotoApp(action: any) {
  try {
    yield call(deletePhotoService, action.token, action.id)
    yield put({ type: PHOTOS_CREATE_REQUEST})
  }catch (error) {
    yield put({ type: DELETE_PHOTO_ERROR})
  }
}

function* deletePhotoDesk(action: any) {
  try {
    const store = yield select()
    yield call(deletePhotoService, action.token, action.id, store.auth.token)
    yield put({ type: LISTPHOTOS_CREATE_REQUEST})
  }catch (error) {
    yield put({ type: DELETE_PHOTO_ERROR})
  }
}

function* createPhotoSaga() {
  yield takeLatest(LISTPHOTOS_CREATE_REQUEST, getImages)
  yield takeLatest(UPDATE_IMAGE_GALERIA_APP, savePhotos)
  yield takeLatest(UPDATE_IMAGE_GALERIA_DESk, savePhotosDesk)
  yield takeLatest(PHOTOS_CREATE_REQUEST, getPhotos)
  yield takeLatest(DELETE_PHOTO_REQUEST_APP, deletePhotoApp)
  yield takeLatest(DELETE_PHOTO_REQUEST_DESK, deletePhotoDesk)
}

export default createPhotoSaga
