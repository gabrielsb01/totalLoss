import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')

export const setProvidersService = (token: string, payload: any) => {
  return axios({
    method: 'POST',
    url: `${config.API.SET_TOWING_COMPANIES}`,
    headers: {
      'Authorization': `Bearer ${token}`
    },
    data: payload
  }).then(response => {
    return response
  }
  ).catch(error => {
    throw error
  })
}
