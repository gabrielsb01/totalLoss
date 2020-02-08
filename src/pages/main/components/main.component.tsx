import * as React from 'react'

//Material.ui
import { AppBar, Toolbar, List, ListItem, ListItemIcon, ListItemText, Typography, ListSubheader, Container, Button } from '@material-ui/core'
import { PermDeviceInformation, People, ViewList, Settings, DashboardRounded, LocalShipping } from '@material-ui/icons'
import SecureRoute from '@core/secure/routeMain.secure'

//css
import classNames from 'classnames/bind'
import { Redirect } from 'react-router'

const styl: any = require('./../css/main.component.styl')
const cx = classNames.bind(styl)

//Img
const logosolera: any = require('../../../assets/images/solera_audatex.svg')

class Main extends React.Component<any,any> {
    public RouteWithSubRoutes = (route: any) => {
        return (
            <SecureRoute 
                path={route.path}
                render={props => (
                <route.component {...props}  routes={route.routes} />
                )}
          />
        )
    }

    componentDidMount() {
        this.props.getConfigAction()
    }

    logOff = () => {
        sessionStorage.removeItem('token')
        this.props.logoff()
        this.props.history.push('/?user=loginFailed')
    } 
    
    render() {
        const { location, config, errorConfig, color, token } = this.props
        const RouteWithSubRoutes = this.RouteWithSubRoutes
        if(errorConfig){
            return <Redirect to="/?user=loginFailed" />
        }
        else{
            const style = {
                backgroundColor:  `#${color}`
              }
            return (
                <React.Fragment>
                    {
                        config && 
                            <div className={cx('Main')}>
                                <div className={cx('backgroundMenu')}>
                                    <div className={cx('backgroundOpacity')}></div>
                                    <List 
                                        className={cx('Menu')}
                                    >
                                        <AppBar position="static" style={style}>
                                            <Toolbar className={cx('Header')}>
                                                <Typography>
                                                    Aviso Fácil 
                                                </Typography>
                                            </Toolbar>
                                        </AppBar> 
                                        <ListSubheader className={cx('MenuListTitle')}>Identificador Perda Total</ListSubheader>
                                        <ListItem 
                                            button 
                                            className={cx('MenuListItem')} 
                                            selected={(location.pathname == "/main/dashboard")}
                                            classes={{
                                                selected: cx('MenuListItemSelected')
                                            }}
                                            onClick={() => this.props.history.push('/main/dashboard')}
                                        >
                                            <ListItemIcon>
                                                <DashboardRounded />
                                            </ListItemIcon>
                                            <ListItemText primary="Dashboard" />
                                        </ListItem>
                                        {
                                            config.TypeCompany == 1 && 
                                                <ListItem 
                                                    button 
                                                    className={cx('MenuListItem')} 
                                                    selected={(location.pathname == "/main/create")}
                                                    classes={{
                                                        selected: cx('MenuListItemSelected')
                                                    }}
                                                    onClick={() => this.props.history.push('/main/create')}
                                                >
                                                    <ListItemIcon>
                                                        <PermDeviceInformation />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Novo Aviso" />
                                                </ListItem>
                                        }
                                        
                                        <ListItem 
                                            button 
                                            className={cx('MenuListItem')} 
                                            selected={(location.pathname == "/main/assessments")}
                                            classes={{
                                                selected: cx('MenuListItemSelected')
                                            }}
                                            onClick={() => this.props.history.push('/main/assessments')}
                                        >
                                            <ListItemIcon>
                                                <ViewList />
                                            </ListItemIcon>
                                            <ListItemText primary="Listar Avisos" />
                                        </ListItem>
                                        {
                                            config.TypeCompany == 1 &&
                                                <ListItem 
                                                    button 
                                                    className={cx('MenuListItem')} 
                                                    selected={(location.pathname == "/main/providers")}
                                                    classes={{
                                                        selected: cx('MenuListItemSelected')
                                                    }}
                                                    onClick={() => this.props.history.push('/main/providers')}
                                                >
                                                    <ListItemIcon>
                                                        <LocalShipping />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Prestadores" />
                                                </ListItem> 
                                        }
                                        {
                                            config.TypeCompany == 2 &&
                                                <ListItem 
                                                    button 
                                                    className={cx('MenuListItem')} 
                                                    selected={(location.pathname == "/main/collaborators")}
                                                    classes={{
                                                        selected: cx('MenuListItemSelected')
                                                    }}
                                                    onClick={() => this.props.history.push('/main/collaborators')}
                                                >
                                                    <ListItemIcon>
                                                        <People />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Colaboradores" />
                                                </ListItem> 
                                        }   
                                        <ListSubheader className={cx('MenuListTitle')}>Configurações</ListSubheader>
                                        <ListItem button className={cx('MenuListItem')} disabled>
                                            <ListItemIcon>
                                                <Settings />
                                            </ListItemIcon>
                                            <ListItemText primary="Editar Configurações" />
                                        </ListItem>                
                                    </List>
                                </div>
                                <div className={cx('Page')}>
                                    <AppBar position="static" style={style}>
                                        <Toolbar className={cx('HeaderPage')}>
                                            <Button style={{ color: '#fff'}} onClick={this.logOff}>
                                                Sair
                                            </Button>
                                        </Toolbar>
                                    </AppBar>
                                    <Container className={cx('container')}>
                                        <div className={cx('logo')}>
                                            <img src={`data:image/jpeg;base64,${config.Logo}`}/>
                                            <img src={logosolera} />
                                        </div>
                                        {
                                            this.props.routes.map((route: any, i: number) =>
                                                <RouteWithSubRoutes key={i} {...route} />
                                            )
                                        }
                                    </Container>
                                </div>
                            </div>
                    }
                </React.Fragment>
            )
        }
        
    }
}

export default Main