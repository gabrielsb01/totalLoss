import * as React from 'react'
import Photos from './containers/photos.container'

class PhotosMain extends React.Component<any, any> {
    render() {
        return (
            <Photos {...this.props} />
        )
    }
}

export default PhotosMain