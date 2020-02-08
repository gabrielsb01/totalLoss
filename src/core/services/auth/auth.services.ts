import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')

export const authService = (payload: any) => {
  return axios({
    method: 'POST',
    url: `${config.API.AUTHENTICATE}`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(payload)
  }).then(response => {

    return response
  }
  ).catch(error => {

    throw error
  })
}
