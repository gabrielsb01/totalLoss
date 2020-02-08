import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')

const categoriesByIdService = (id: any) => {
  return axios({
    method: 'GET',
    url: `${config.API.GET_CATEGORIES_BY_ID_URL}${id}`
  })
  .then(response => {
    return response
  })
  .catch(error => {
    throw error
  })
}

export default categoriesByIdService

