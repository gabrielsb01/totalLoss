import axios from 'axios'

const config: any = require('@core/config/constants/general.constant')

export const photoService = async (token: string, id: string) => {
  return axios({
    method: 'GET',
    url: `${config.API.GET_PHOTO}${token}?idImage=${id}`,
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response
  }).catch(error => {
    throw error
  })
}

export default photoService