import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import question from './question/question.reducer'
import auth from './auth/auth.reducer'
import claim from './claim/claim.reducer'
import sendClaim from './sendClaim/sendClaim.reducer'
import photos from './photos/photos.reducer'
import company from './company/company.reducer'
import locations from './locations/locations.reducer'
import config from './config/config.reducer'
import providers from './providers/providers.reducer'
import collaborators from './collaborators/collaborators.reducer'

const reducers = combineReducers({
  form,
  question,
  auth,
  claim,
  sendClaim,
  photos,
  company,
  locations,
  config,
  providers,
  collaborators
})

export default reducers
