import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')

export const updateProvidersService = (token: string, payload: any) => {
  return axios({
    method: 'PUT',
    url: `${config.API.UPDATE_TOWING_COMPANIES}${payload.Id}`,
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
