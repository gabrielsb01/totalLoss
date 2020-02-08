import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')

const deletePhotoService = async (token: any, id: any, auth?: string) => {
  return axios({
    method: 'DELETE',
    url: `${config.API.UPLOAD_PHOTO_URL}${token}?idImage=${id}`,
    headers: auth && {
      Authorization: `Bearer ${auth}`
  }
  })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export default deletePhotoService
