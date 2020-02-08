import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')

export const providersService = (token: string) => {
  return axios({
    method: 'GET',
    url: `${config.API.GET_TOWING_COMPANIES}`,
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
