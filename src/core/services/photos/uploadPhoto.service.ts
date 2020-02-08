import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')

const uploadPhotoService = (file: any, token: string, auth?: string) => {
    const payload = {
        ...file,
        Base64Image: file.Base64Image.split(';base64,').pop()
    }
    return axios({
        method: 'POST',
        url: `${config.API.UPLOAD_PHOTO_URL}${token}`,
        data: payload,
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

export default uploadPhotoService

