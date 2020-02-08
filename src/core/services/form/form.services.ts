import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')

export const sendClaim = (payload: any, token: string) => {
  return axios({
    method: 'POST',
    url: `${config.API.POST_FORM_URL}`,
    headers: {
      'Authorization': `Bearer ${token}`,
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


export const checkValidToken = (payload: any) => {
  return axios({
    method: 'GET',
    url: `${config.API.CHECK_TOKEN}`,
    headers: {
      'Authorization': `Bearer ${payload}`,
      'Content-Type': 'application/json'
    }
  }).then(response => ({
    status: 'success',
    data: response.data
  })).catch(error => ({
    status: "error",
    error
  }))

}