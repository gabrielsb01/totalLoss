import * as React from 'react'
import Gallery from './containers/gallery.container'

class GalleryMain extends React.Component<any, any> {
    render() {
        return (
            <Gallery {...this.props} /> 
        )
    }
}

export default GalleryMain