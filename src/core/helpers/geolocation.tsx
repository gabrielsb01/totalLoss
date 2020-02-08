export const getLatAndLong = async () =>
  new Promise(resolve => {
    const success = (position: any) =>
      resolve({
        success: true,
        data: { lat: position.coords.latitude, long: position.coords.longitude }
      })
    const error = (error: any) => resolve({ success: false, data: error })

    return navigator.geolocation.getCurrentPosition(success, error)
  })
