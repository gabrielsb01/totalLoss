import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')

export const configService = (token: string) => {
  return axios({
    method: 'GET',
    url: `${config.API.GET_CONFIG}`,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(response => {
    return response
  }
  ).catch(error => {
    throw error
  })
}
