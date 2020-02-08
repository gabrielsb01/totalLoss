import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')
//Trocar URL
const finalizeClaimService = (token: string) => {
  return axios({
    method: 'PUT',
    url: `${config.API.FINALIZE_DATA_URL}${token}`
  })
  .then(response => {
    return response
  })
  .catch(error => {
    throw error
  })
}

export default finalizeClaimService

