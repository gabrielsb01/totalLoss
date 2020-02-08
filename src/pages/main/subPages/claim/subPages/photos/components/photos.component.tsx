import * as React from 'react'

//components
import Dropzone from 'react-dropzone'
import Gallery from './../../../../assessments/subComponents/gallery'

//Material Components
import { CameraAlt, Delete } from '@material-ui/icons'
import { Typography, ButtonBase, Grid, IconButton, Paper, CircularProgress } from '@material-ui/core'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'

//css
import classNames from 'classnames/bind'
const styl: any = require('../css/photos.component.styl')
const cx = classNames.bind(styl)

class Photos extends React.Component<any, any> {
    state = {
        galleryOpen: null,
        activeKey: null
    }

    componentDidMount() {
        this.props.ListPhoto()
    }
    componentDidUpdate() {
        const { match } = this.props
        this.props.verifyToken(match.params.id)
    }

    getBase64 = file => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = () => resolve(reader.result)
          reader.onerror = error => reject(error)
        })
    }

    onDrop = (acceptedFiles) => {
         
        acceptedFiles.map(item => this.getBase64(item).then(data => {
                this.props.updateGaleryDesk({ Base64Image: data, Name: item.name, MimeType: item.type })
            }    
        )) 
        
    }

    deletePhoto = (id) => {
        const { token } = this.props
        this.props.DeletePhoto(token, id)
    }

    gallery = (activeKey) => {
        this.props.ListPhoto()
        this.setState(prevState =>({
            galleryOpen: !prevState.galleryOpen,
            activeKey: activeKey
        }))
    }

    render() {
        const { galery, token, hasImage } = this.props
        const { galleryOpen, activeKey } = this.state
        return(
            <Paper className={cx('content')}>
                <Grid container spacing={2} className={cx('bodyPhotosBeforeRender')} id={'container_content'}>
                    {
                        activeKey && 
                        <Gallery open={galleryOpen} gallery={this.gallery} activeKey={activeKey} />
                    }
                    <Grid id={'container_dropzone'} item xs={3} className={cx('areaButtonUpload')}>
                        <Dropzone onDrop={this.onDrop}>
                            {({ getRootProps, getInputProps, isDragActive }) => (
                                <div id={'container_input_photos'} {...getRootProps()} className={cx('buttonUpload', {'dropzone--isActive': isDragActive})}>
                                    <input id={'input_photos'} {...getInputProps()} />
                                    {isDragActive ? (
                                        <p id={'text_to_drop'}>Arraste aqui...</p>
                                    ) : (
                                        <div id={'container_icon_content'}>
                                            <ButtonBase component="span" className={cx('uploadPhoto')} id={'btn_icon_photos'}>
                                                <div className={cx('badge')} id={'container_icon'}>
                                                    <CameraAlt fontSize="small" id={'icon_photos'} />
                                                </div>
                                            </ButtonBase>
                                            <div className={cx('labelUpload')} id='container_text_photos'>
                                                <Typography variant="body2" id='text_add_photos'>
                                                    CLIQUE OU ARRASTE PARA ADICIONAR FOTOS
                                                </Typography>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </Dropzone>
                    </Grid>
                    
                    {/* lOOP FOTOS */}

                    {
                        hasImage == true ?
                        galery[0] ?
                            galery.map((item, i) => 
                            <Grid id={'container_dropzone'} item xs={3} className={cx('areaButtonUpload')}>
                                <div className={cx('preVisualizacao')}>
                                    <IconButton onClick={() => this.gallery(token)} className={cx('divGallery')}>
                                        <PhotoLibraryIcon />
                                    </IconButton>
                                    <IconButton className={cx('divDelete')} onClick={()=> this.deletePhoto(item.data.Id)}>
                                        <Delete />
                                    </IconButton>
                                </div>
                                <img src={`data:image/jpeg;base64,${item.data.Base64Image}`} />
                            </Grid>
                        )
                        :
                        <Grid id={'container_dropzone'} className={cx('sending')} item xs={9}>
                            <CircularProgress color="secondary" size={120} thickness={1} />
                            <span>Carregando Fotos...</span>
                        </Grid>:
                        <Grid container direction="row" justify="center" alignItems="center" id={'container_dropzone'} className={cx('sFotos')} item xs={9}>
                            <span>Sem fotos</span>
                        </Grid>
                    }
                </Grid>
            </Paper>
        )
    }
}

export default Photos