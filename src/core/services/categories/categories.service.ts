import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')

const categoriesService = (id: any) => {
  return axios({
    method: 'GET',
    url: `${config.API.GET_CATEGORIES_URL}${id}`
  })
  .then(response => {
    return response
  })
  .catch(error => {
    throw error
  })
}

export default categoriesService

