import axios from 'axios'

const config: any = require('@core/config/constants/general.constant')

export const listPhotoService = async (token: string) => {
  return axios({
    method: 'GET',
    url: `${config.API.GET_LIST_PHOTO}${token}`,
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response
  }).catch(error => {
    throw error
  })
}

export default listPhotoService