import  * as React from 'react'
import SecureRoute from '@core/secure/routeMain.secure'
import { Tabs, Tab, Paper, Chip, Card, CardHeader } from '@material-ui/core'

//CSS
import classNames from 'classnames/bind'
const styl: any = require('./../css/claim.component.styl')
const cx = classNames.bind(styl)

class Claim extends React.Component<any, any> {
    state = {
        value: 0
    }
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
    

    handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        const { match } = this.props 
        this.setState({ value: newValue })
        switch(newValue){
            case 0: 
                return this.props.history.push(`/main/claim/data/${match.params.id}`)
            case 1:
                return this.props.history.push(`/main/claim/answers/${match.params.id}`)
            case 2: 
                return this.props.history.push(`/main/claim/photos/${match.params.id}`)
        }
    }

    getStatusName = (n) => {
        switch(n){
            case 0:
                return 'Novos'
            case 1:
                return 'Em Andamento'
            case 2:
                return 'Concluido'
        }
    }

    getStatusClass = (n) => {
        switch(n){
            case 0:
                return 'StatusNew'
            case 1:
                return 'StatusCurrent'
            case 2:
                return 'StatusFinalized'
        }
    }

    componentDidMount() {
        this.props.getTowingCompanies()
        const { match } = this.props 
        this.props.verifyToken(match.params.id)
    }

    componentWillUnmount(){
        this.props.clearNewClaim()
    }

    
    render () {
        const { routes, TotalPoint, Type, Status, LicensePlate } = this.props
        const RouteWithSubRoutes = this.RouteWithSubRoutes
        const { value } = this.state
        return (
            <React.Fragment>
                <div className={cx('headerClaim')}>
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab label="Dados" />
                        <Tab label="Captura de Danos" />
                        <Tab label="Fotos" />
                    </Tabs>
                    <Card>
                        <CardHeader
                            title={`${TotalPoint} - pontos`}
                            subheader={
                                Type == 2 ? 
                                    <React.Fragment>Veículo classificado como perda total</React.Fragment>
                                    :
                                    <React.Fragment>Veículo classificado como recuperável</React.Fragment>
                            }
                            action={
                                <Chip color="primary" className={cx(this.getStatusClass(Status))}  label={this.getStatusName(Status)} />
                            }
                        />
                    </Card>
                </div>
                
                {
                    LicensePlate && 
                        routes.map((route: any, i: number) =>
                            <RouteWithSubRoutes key={i} {...route} />
                        )
                }
            </React.Fragment>
        )
    }
} 

export default Claim