import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')
//Trocar URL
const sendAnswerService = (values: any, token: string, auth?: string) => {
  return axios({
    method: 'POST',
    url: `${config.API.SEND_ANSWER_URL}${token}`,
    data: values,
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

export default sendAnswerService

