import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')

const claim = (token: any) => {
  return axios({
    method: 'GET',
    url: `${config.API.GET_DATA_URL}${token}`
  })
  .then(response => {
    return response
  })
  .catch(error => {
    throw error
  })
}

export default claim

