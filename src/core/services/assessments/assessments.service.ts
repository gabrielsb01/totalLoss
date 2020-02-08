import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')

export const assessmentsService = (token: string, page: number, size: number, status?:number) => {
  return axios({
    method: 'GET',
    url: `${config.API.GET_ASSESSMENTS}`,
    headers: {
      'Authorization': `Bearer ${token}`
    },
    params: {
        PageSize: size,
        PageNumber: page,
        status
    }
  }).then(response => {
    return response
  }
  ).catch(error => {
    throw error
  })
}
