import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')

export const smsService = (token: string, key: string) => {
  return axios({
    method: 'POST',
    url: `${config.API.SMS_ASSESSMENT}${key}`,
    headers: {
      'Authorization': `Bearer ${token}`
    },
  }).then(response => {
    return response
  }
  ).catch(error => {
    throw error
  })
}
