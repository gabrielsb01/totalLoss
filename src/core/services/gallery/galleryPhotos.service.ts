import axios from 'axios'

const config: any = require('@core/config/constants/general.constant')
export const galleryPhotosService = async (key: string, id: any, token: string) => {
  return axios({
    method: 'GET',
    url: `${config.API.GET_PHOTO_GALLERY}${key}?idImage=${id}`,
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

export default galleryPhotosService