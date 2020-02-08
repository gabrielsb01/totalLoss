
export const solicitCameraPermission = () =>
  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => ({ success: true, data: stream }))
    .catch(err => ({ success: false, data: err }))
