
import { all } from 'redux-saga/effects'
import claimSaga from './claim/claim.saga'
import questionSaga from './questions/question.saga'
import authSaga from './authSaga/auth.saga'
import sendClaim from './sendClaim/sendClaim.saga'
import findAddressSaga from './findAddress/findAddress.saga'
import configSaga from './config/config.saga'
import providersSaga from './providers/providers.saga'
import collaboratorsSaga from './collaborators/collaborators.saga'
import createPhotoSaga from './photo/uploadPhoto.saga'

export default function* rootSaga() {
  yield all([
    claimSaga(),
    questionSaga(),
    authSaga(),
    sendClaim(),
    findAddressSaga(),
    configSaga(),
    providersSaga(),
    collaboratorsSaga(),
    createPhotoSaga()
  ])
}
