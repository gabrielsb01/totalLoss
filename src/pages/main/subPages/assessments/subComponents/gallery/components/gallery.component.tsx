import * as React from 'react'
import Modal from '@components/modal'
import { IconButton, ButtonBase, CircularProgress } from '@material-ui/core'
import { Fullscreen, FullscreenExit, Close, KeyboardArrowRight, KeyboardArrowLeft } from '@material-ui/icons'


//css
import classNames from 'classnames/bind'
import listGalleryService from '@core/services/gallery/listGallery.service'
import galleryPhotosService from '@core/services/gallery/galleryPhotos.service'
const styl: any = require('./../css/gallery.component.styl')
const cx = classNames.bind(styl)

class Gallery extends React.Component<any, any> {
    state = {
        activeType: 0,
        index: 0,
        fullWidth: false,
        galeria: []
    }

    componentDidMount () {
        this.getImages()
    }

    getImages = async () => {
        const { activeKey, token } = this.props
        const lista = await listGalleryService(activeKey, token)
        let PHOTOS = await this.getData(lista.data.Page)
        this.setState({ galeria: PHOTOS})
    }

    getData = async (list) => {
        const { activeKey, token } = this.props
        return Promise.all(list.map(item => galleryPhotosService(activeKey, item.Id, token).then(img => img.data)))
    }

    stateFull = () => {
        const { fullWidth } = this.state
        this.setState({ fullWidth: !fullWidth })
    }

    public handleImageRight = () => {
        const { index } = this.state
        this.setState({ index: index + 1 })
    }

    public handleImageLeft = () => {
        const { index } = this.state
        this.setState({ index: index - 1 })
    }

    public handleImage (item) {
        this.setState({ index: item })
    } 

    render() {
        const { open } = this.props
        const { index, fullWidth, galeria } = this.state
        return(
            <Modal
                open={open}
                maxWidth="md"
                typeModal="attention"
                fullScreenModal={fullWidth}
                className={cx('galleryFull')}
                {...this.props}
            >
                <div className={cx('gallery')} style={fullWidth ? {height: '100vh'} : {height: '100%' }}>
                    <IconButton className={cx('iconClose')}>
                        <Close onClick={() => this.props.gallery()}/>
                    </IconButton>
                    <IconButton className={cx('iconFull')} onClick={this.stateFull}>
                        {
                            fullWidth ? <FullscreenExit /> : <Fullscreen />
                        }
                    </IconButton>
                    <div className={cx('imgFull')} style={fullWidth ? {maxHeight: window.innerHeight - 150, minHeight: self.innerHeight - 150} : { maxHeight: window.innerHeight - 350, minHeight: self.innerHeight - 350 }}>
                        {
                            galeria[0] ?
                            <img src={`data:image/jpeg;base64,${galeria[0] && galeria[index].Base64Image}`}  style={ fullWidth ? {maxHeight: self.innerHeight - 150 } : { maxHeight: self.innerHeight - 350 }} />
                            :
                            <div className={cx('sending')}>
                                <CircularProgress color="secondary" size={120} thickness={1} />
                                <span>Carregando Fotos...</span>
                            </div>
                        }
                        <div className={cx('arrows')}>
                            <IconButton className={cx('arrowLeft')} disabled={ index == 0 ? true : false } onClick={this.handleImageLeft}>
                                <KeyboardArrowLeft />
                            </IconButton>
                            <IconButton className={cx('arrowRight')} onClick={this.handleImageRight} disabled={ index == galeria.length - 1 ? true : false }>
                                <KeyboardArrowRight />
                            </IconButton>
                        </div>
                    </div>
                    <div className={cx('thumbs')}>
                        {
                        galeria[0] &&
                        galeria.map((item, i) => 
                            <ButtonBase className={cx('thumbItem')} key={i} onClick={() => this.handleImage(i)}>
                                <img className={cx('thumbImg', { thumbSelected: index == i ? true : false })} src={`data:image/jpeg;base64,${item.Base64Thumbnail}`} />
                            </ButtonBase> 
                        )
                        }
                    </div>
                </div> 
                
            </Modal>
        )
    }
}

export default Gallery