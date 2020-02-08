import axios from 'axios'

const config: any = require('@core/config/constants/general.constant')

export const listGalleryService = async (key: string, token: string) => {
  return axios({
    method: 'GET',
    url: `${config.API.GET_LIST_PHOTO}${key}`,
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(response => {
    return response
  }).catch(error => {
    throw error
  })
}

export default listGalleryService