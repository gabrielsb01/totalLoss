import * as React from 'react'
import { Menu, MenuItem, Fab, Card, CardContent, Typography, Grid, CircularProgress, IconButton, Button, CardActions, Dialog, ButtonBase } from '@material-ui/core'
import { Send, CameraAlt, Done, Sync, Delete } from '@material-ui/icons'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import classNames from 'classnames/bind'
import Header from '@components/header'
import { FotosIProps, FotosIStates } from '../interfaces/fotos.interface'
import Scrollbars from 'react-custom-scrollbars'


const styl: any = require('./../css/fotos.component.styl')
const cx = classNames.bind(styl)
const step0: any = require('@assets/images/step0.svg')
const step1: any = require('@assets/images/step1.svg')
const step4: any = require('@assets/images/step4.svg')
const step3: any = require('@assets/images/step3.svg')
const step6: any = require('@assets/images/step6.svg')
const imagens = [ 
    {label: "Foto da frente", img: step3},
    {label: "Foto da traseira", img: step4},
    {label: "Foto da Lateral", img: step0},
    {label: "Foto do chassi", img: step6},
]
const delay = (ms) => new Promise(res => setTimeout(res, ms))

class Fotos extends React.Component<FotosIProps, FotosIStates> {
    constructor(props: FotosIProps) {
        super(props)
        this.state = {
          menu: null,
          activeStep: 0,
          snackbarOpen: false,
          openPhoto: false,
          file: null,
          openSubtitle: false,
          temporaryImage: {
            Base64Image: null, 
            Name: null, 
            MimeType: null
          }
        }

    }

    componentDidMount() {
        this.props.GaleryPhoto()
    }

    handleClick = event => {
        this.setState({ menu: event.currentTarget })
    }

    handleCloseMenu = () => {
        this.setState({ menu: null })
    }

    getBase64 = (file: File) => {
        return new Promise((resolve, reject) => {
            const width = 1200
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = event => {
                const img: any = new Image()
                img.src = event.target.result
                img.onload = () => {
                    const elem = document.createElement('canvas');
                    const scaleFactor = width / img.width
                    elem.width = width
                    elem.height = img.height * scaleFactor
                    const ctx = elem.getContext('2d')
                    // img.width and img.height will contain the original dimensions
                    ctx.drawImage(img, 0, 0, width, img.height * scaleFactor);
                    resolve(document.createElement('img').src = elem.toDataURL())
                },
                reader.onerror = error => reject(error)
            }
        })
    }

    uploadFoto = (event: React.FormEvent<HTMLInputElement>): void => {
        const target= event.target as HTMLInputElement
        const file: File = (target.files as FileList)[0]
        this.getBase64(file)
        .then((data: File) => {
            this.setState({ temporaryImage: { Base64Image: data, Name: file.name, MimeType: file.type } }),
            this.props.OpenModal(true)
        })
    }

    savePhotos = () => {
        const { temporaryImage } = this.state
        this.props.updateGalery(temporaryImage)
    }

    deletePhoto = (id) => {
        const { token } = this.props
        this.props.DeletePhoto(token, id)
    }

    render () {
        const { temporaryImage, menu } = this.state 
        const { galery, token, sending, errorUpload, open, color } = this.props
        const style = {
            backgroundColor:  `#${color}`
        }
        const openMenu = Boolean(menu)
        return (
            <React.Fragment>
                <Header title="Adicione Fotos"  {...this.props}/>
                    <Grid container spacing={2} className={cx('contentPhotos')}>
                        <Dialog
                            open={open}
                            fullScreen={true}
                        >
                            <img src={temporaryImage.Base64Image} style={{ maxWidth: '100%' }} />
                            {
                                sending && 
                                <div className={cx('sending')}>
                                    <CircularProgress color="primary" size={120} thickness={1} />
                                    <span>Enviando...</span>
                                </div>
                            }
                            {
                                errorUpload && 
                                <Typography>Erro ao salvar a foto tente novamente</Typography>
                            }
                            <div className={cx("subtitle")}>
                                <div className={cx("confirmation")}>
                                    <div className={cx("confirmation_button")}>
                                        <ButtonBase disabled={sending} onClick={() => {this.props.OpenModal(false), this.setState({ temporaryImage: { Base64Image: null, Name: null, MimeType: null }})}}>
                                            <Sync />
                                            <Typography>Tirar Novamente</Typography>
                                        </ButtonBase>
                                    </div>
                                    <div className={cx("confirmation_button")}>
                                        <ButtonBase disabled={sending} onClick={this.savePhotos}>
                                            <Done />
                                            <Typography>Continuar</Typography>
                                        </ButtonBase>
                                    </div>
                                </div>
                            </div>
                        </Dialog>
                        { 
                            galery.length > 0 ? 
                                galery.map((item, i) => 
                                    <Grid key={i} item xs={6} className={cx('imgItem')}>
                                        <Card>
                                            <CardContent className={cx('cardContent')}>
                                                <img
                                                    src={`data:image/jpeg;base64,${item.data.Base64Thumbnail}`}
                                                />
                                            </CardContent>
                                            <CardActions className={cx('iconClose')}>
                                                <IconButton aria-label="settings" onClick={()=> this.deletePhoto(item.data.Id)}>
                                                    <Delete />
                                                </IconButton>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                                : 
                                imagens.map((item, i) => 
                                    <Grid key={i} item xs={6} className={cx('imgItem')}>
                                        <Card>
                                            <CardContent className={cx('cardContent')}>
                                                <img
                                                    src={item.img}
                                                />
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                        }
                    
                        <div className={cx('cam')}>
                            <label htmlFor="uploadFile">
                                <input
                                    accept="image/*"
                                    id="uploadFile"
                                    type="file"
                                    style={{ display: 'none'}}
                                    onChange={this.uploadFoto}
                                />
                                <Fab component="span" color="primary" style={style}>
                                    <CameraAlt />
                                </Fab>
                            </label>
                            
                        </div>
                        <Grid item xs={12}>
                            <Button 
                                className={cx('confirmButton')} 
                                color="primary" 
                                style={style}
                                variant="contained" 
                                fullWidth
                                onClick={() => this.props.history.push(`/app/enviar/?token=${token}`)}
                            >
                                Avançar
                            </Button>
                        </Grid>
                    </Grid>
            </React.Fragment>
        )
    }
}

export default Fotos