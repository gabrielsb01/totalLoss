import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')

const locations = (id: any) => {
    
  return axios({
    method: 'GET',
    url: `${config.API.GET_LOCATION_BY_ID_URL}/${id}`
  })
  .then(response => {
    
    return response
  })
  .catch(error => {
    
    throw error
  })
}

export default locations

