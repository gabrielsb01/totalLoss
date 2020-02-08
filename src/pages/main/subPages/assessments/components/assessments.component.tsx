import * as React from 'react'
import { IconButton, Typography, Grid, Avatar, Card, CardContent, CardHeader, Container, CardActions, Button, Table, TableHead, TableRow, TableCell, TableBody, Breadcrumbs, Link, Chip, Tooltip, TablePagination, Snackbar } from '@material-ui/core'
import { PersonAdd, FilterList, Edit, Sms, PhonelinkErase, MobileScreenShare, MobileFriendly, AddToHomeScreen, Close } from '@material-ui/icons'

import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'

//Components
import Gallery from './../subComponents/gallery'
import listGalleryService from '@core/services/gallery/listGallery.service'
import galleryPhotosService from '@core/services/gallery/galleryPhotos.service'

//css
import classNames from 'classnames/bind'
import { assessmentsService } from '@core/services/assessments/assessments.service'
import ModalApp from '../subComponents/modalApp'
import { smsService } from '@core/services/sms/sms.service'
const styl: any = require('./../css/assessments.component.styl')
const cx = classNames.bind(styl)


class Assessments extends React.Component<any, any> {
    state = {
        galleryOpen: null,
        activeNew: false,
        activeCurrent: false,
        activeFinalized: false,
        activeStatus: -1,
        assessments: null,
        activePage: 0,
        activeAddUser: false,
        activeId: null,
        sendSMS: false,
        activeKey: null
    }

    componentDidMount(){
        const { location } = this.props
        if(location.search){
            const status = location.search.split('=')
            this.setState(
                {activeStatus: parseInt(`${status[1]}`)},
                () => this.getAssessments(this.state.activePage + 1)
            )
        }else{
            this.getAssessments(this.state.activePage + 1)
        }
    }

    verifyStatus = (item) => {
        switch  (item) {
            case (0): 
                return <Chip label="Novo" className={cx('StatusNew')} />
            case (1): 
                return <Chip label="Em Andamento" className={cx('StatusCurrent')} />
            case (2): 
                return <Chip label="Concluido" className={cx('StatusFinalized')} />
            default: 
                return ""
        }
    }

    gallery = (activeKey) => {
        this.props.GaleryPhoto()
        this.setState(prevState =>({
            galleryOpen: !prevState.galleryOpen,
            activeKey: activeKey
        }))
      }

    getAssessments = (page) => {
        const { token } = this.props
        const { activeStatus } = this.state
        assessmentsService(token, page, 10, (activeStatus > -1) ? activeStatus : null)
        .then(item => this.setState({ assessments: item.data }))
    }

    handleChangePage = (event: unknown, newPage: number) => {
        this.setState({ activePage: newPage })
        this.getAssessments(newPage + 1)
    }

    onClose = () => {
        this.setState({activeAddUser: false, activeId: null })
        this.getAssessments(this.state.activePage + 1)
    }

    sendSMS = (item) => {
        const { token } = this.props
        smsService(token, item.Key)
        .then(() => this.setState({ sendSMS: "Sms enviado com sucesso!" }))
        .catch(() => this.setState({ sendSMS: "Erro ao enviar sms!" }))
    }
    render () {
        const { activeStatus, galleryOpen, assessments, activePage, activeAddUser, activeId, sendSMS, activeKey } = this.state
        const { TypeCompany } = this.props
        return (
            <Grid container spacing={2}>
                <ModalApp 
                    open={activeAddUser}
                    activeId={activeId}
                    onClose={() => this.onClose()}
                />
                {
                    activeKey && 
                    <Gallery open={galleryOpen} gallery={this.gallery} activeKey={activeKey} />
                }
                
                <Grid item xs={12}>
                    <Breadcrumbs>
                        <Typography>Principal</Typography>
                        <Chip label="Meus Avisos" />
                    </Breadcrumbs>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader
                            title="Avisos"
                            action={
                                <div className={cx('actionsClaims')}>
                                    <Typography style={{display: 'flex', justifyContent: 'center'}}><FilterList /> Filtrar:</Typography>
                                    <Chip label="Todos" onClick={() => this.setState({ activeStatus: -1 }, () => this.getAssessments(activePage + 1))} className={ activeStatus == -1 && cx('StatusAll')} />
                                    <Chip label="Novos" onClick={() => this.setState({ activeStatus: 0 }, () => this.getAssessments(activePage + 1))} className={ activeStatus == 0 && cx('StatusNew')} />
                                    <Chip label="Em andamento" onClick={() => this.setState({ activeStatus: 1 }, () => this.getAssessments(activePage + 1))} className={ activeStatus == 1 && cx('StatusCurrent')} />
                                    <Chip label="Concluidos" onClick={() => this.setState({ activeStatus: 2 }, () => this.getAssessments(activePage + 1))} className={ activeStatus == 2 && cx('StatusFinalized')} />
                                </div>
                            }
                        />
                        <CardContent>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            ID
                                        </TableCell>
                                        <TableCell>
                                            Data Criação
                                        </TableCell>
                                        <TableCell>
                                            Prestador
                                        </TableCell>
                                        <TableCell>
                                            Colaborador
                                        </TableCell>
                                        <TableCell>
                                            Status
                                        </TableCell>
                                        <TableCell>
                                            Placa
                                        </TableCell>
                                        <TableCell>
                                            Sinistro
                                        </TableCell>
                                        <TableCell>
                                            Galeria
                                        </TableCell>
                                        <TableCell>
                                            Ações
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        assessments && assessments.Page.map((item,i) => 
                                            <TableRow key={i}>
                                                <TableCell>
                                                    {item.Id}
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        item.CreateDate && 
                                                            item.CreateDate.substring(0,10).replace(/-/g, "/").toString().split("/").reverse().join("/")
                                                    }
                                                </TableCell>
                                                <TableCell>
                                                    {   item.TowingCompany &&
                                                            item.TowingCompany.Name }
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        (item.TowTruckDriver.Name || item.TowTruckDriverName) ?
                                                        <React.Fragment >
                                                            {
                                                                item.TowTruckDriverName ? 
                                                                <Tooltip title={item.TowTruckDriverName}>
                                                                    <Avatar className={cx('avatar')}>{item.TowTruckDriverName.slice(0,1)}</Avatar>
                                                                </Tooltip>
                                                                :
                                                                <Tooltip title={item.TowTruckDriver.Name}>
                                                                    <Avatar className={cx('avatar')}>{item.TowTruckDriver.Name.slice(0,1)}</Avatar>
                                                                </Tooltip>
                                                            }
                                                        </React.Fragment>
                                                        :
                                                        <React.Fragment>
                                                            {
                                                                TypeCompany == 2 && 
                                                                <Tooltip title="Adicionar Colaborador">
                                                                    <IconButton color="primary" onClick={() => this.setState({ activeId: item.Key, activeAddUser: true})} >
                                                                        <PersonAdd />
                                                                    </IconButton>
                                                                </Tooltip>
                                                            }
                                                            
                                                        </React.Fragment>
                                                        
                                                    }
                                                </TableCell>
                                                <TableCell>
                                                    {this.verifyStatus(item.Status)}
                                                </TableCell>
                                                <TableCell>
                                                    {item.LicensePlate}
                                                </TableCell>
                                                <TableCell>
                                                    {item.ClaimNumber}
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        item.HasImage &&
                                                        <IconButton onClick={() => this.gallery(item.Key)}>
                                                            <PhotoLibraryIcon />
                                                        </IconButton>
                                                    }
                                                </TableCell>
                                                <TableCell>
                                                    { 
                                                        (item.TowTruckDriver.Name || item.TowTruckDriverName) &&
                                                            <Tooltip title="Reenviar SMS">
                                                                <IconButton size="small" onClick={() => this.sendSMS(item)}>
                                                                    <Sms  fontSize="small"/>
                                                                </IconButton>  
                                                            </Tooltip> 
                                                    }
                                                    <Tooltip title="Editar">
                                                        <IconButton size="small" onClick={() => this.props.history.push(`/main/claim/data/${item.Key}`)}>
                                                            <Edit fontSize="small"/>
                                                        </IconButton>  
                                                    </Tooltip>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    }
                                </TableBody>
                            </Table>
                            {
                                assessments && 
                                    <TablePagination 
                                        count={assessments.RowsCount}
                                        onChangePage={this.handleChangePage}
                                        page={activePage}
                                        rowsPerPage={assessments.PageSize}
                                        rowsPerPageOptions={[assessments.PageSize]}
                                    />
                            }
                        </CardContent>
                    </Card>
                </Grid>
                <Snackbar
                    className={cx('sendSMS')}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={sendSMS}
                    autoHideDuration={6000}
                    message={sendSMS}
                    action={
                        <IconButton onClick={()=> this.setState({ sendSMS: false })}>
                            <Close />
                        </IconButton>
                    }
                />
            </Grid>
        )
    }
}

export default Assessments