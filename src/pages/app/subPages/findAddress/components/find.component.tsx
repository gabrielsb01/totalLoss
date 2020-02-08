import * as React from 'react'

// Components
import Header from '@components/header'

//Material.ui
import { ExpansionPanel, Grid, Container, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Fab } from '@material-ui/core'
import NavigationIcon from '@material-ui/icons/Navigation'
import { Home, Email, Phone } from '@material-ui/icons'

//css 
import classNames from 'classnames/bind'
const styl: any = require('./../css/findAddress.component.styl')
const cx = classNames.bind(styl)

class FindAddress extends React.Component <any, any> {

    componentDidMount() {
        const { idConfiguration } = this.props
        this.props.getCompany(idConfiguration)
    }
    render() {
        const { locations } = this.props
        return (
            <React.Fragment>
                <Header title="Pátios de Salvados" {...this.props} />
                    <Container>
                        <Grid className={cx('contentAddress')}>
                        {
                           locations && locations.map((item, i) => 
                                <ExpansionPanel key={i}>
                                    <ExpansionPanelSummary
                                        aria-controls="panel1a-content"
                                        id={item.Id}
                                    >
                                    <Typography variant="h6" >{item.City} - {item.State}</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className={cx('bodyExpansion')}>
                                        <Grid container>
                                            {
                                                item.Detail.map((dados, i) => 
                                                    <React.Fragment>
                                                        <Grid item xs={12} className={cx('infoExpansion')}>
                                                            <Grid item xs={2}>
                                                                <Home />
                                                            </Grid>
                                                            <Grid item xs={10}>
                                                                <Typography variant="subtitle1">Endereço:</Typography>
                                                                <Typography variant="subtitle2">{dados.Street}</Typography>
                                                            </Grid>
                                                        </Grid>

                                                        <Grid item xs={12} className={cx('infoExpansion')}>
                                                            <Grid item xs={2}>
                                                                <Email/>
                                                            </Grid>
                                                            <Grid item xs={10}>
                                                                <Typography variant="subtitle1">E-mail:</Typography>
                                                                <Typography variant="subtitle2">{item.Email}</Typography>
                                                            </Grid>
                                                        </Grid>

                                                        <Grid item xs={12} className={cx('infoExpansion')}>
                                                            <Grid item xs={2}>
                                                                <Phone />
                                                            </Grid>
                                                            <Grid item xs={10}>
                                                                <Typography variant="subtitle1">Telefone:</Typography>
                                                                <Typography variant="subtitle2">{dados.Fone}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        
                                                        <Grid item xs={12} className={cx('infoExpansion')} justify="center" alignItems="center">
                                                            <Fab variant="extended" aria-label="navegar" color="primary" onClick={(event) => {event.preventDefault(); window.open(`http://maps.google.com/maps?daddr=${dados.Longitude},${dados.Latitude}`);}}  >
                                                                <NavigationIcon  />
                                                                Navegar
                                                            </Fab>
                                                        </Grid>
                                                    </React.Fragment>
                                                )
                                            }
                                        </Grid>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            )
                        }
                        </Grid>
                    </Container>  
            </React.Fragment>
        )
    }
}

export default FindAddress