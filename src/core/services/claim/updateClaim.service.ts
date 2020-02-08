import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')
//Trocar URL
const updateClaimService = (values: any, token: string) => {
  return axios({
    method: 'PATCH',
    url: `${config.API.UPDATE_DATA_URL}${token}`,
    data: values
  })
  .then(response => {
    return response
  })
  .catch(error => {
    throw error
  })
}

export default updateClaimService

