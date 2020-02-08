import * as React from 'react'
import MenuBottom from '@components/menuBottom'
import SecureRoute from '@core/secure/route.secure'
import Home from '@components/home/components/home.component'

class AppComponent extends React.Component<any, any> {
    public RouteWithSubRoutes = (route: any) => {
        return (
          <SecureRoute {...route}
            render={props => (
              <route.component {...props}  {...route} />
            )}
          />
        )
    }

    validToken = async () => {
        const { location } = this.props
        if(location.search){
          const token = location.search.replace('?token=', '')
          this.props.verifyToken(token)
        }
        else {
          this.props.notVerify()
        }
    }
    componentDidMount(){
        this.validToken()
    }

    render() {
        const { location, token, routes, request } = this.props
        const RouteWithSubRoutes = this.RouteWithSubRoutes
        const hideEncapsuledRoutes =
            location.pathname === '/app/confirmed/' ||
            location.pathname === '/app/findAddress/' || 
            location.pathname === '/app/finalized' 
        return (
            <React.Fragment>
                {
                    request ? 
                        <Home />
                    :
                    <React.Fragment>
                        {
                            routes.map((route: any, i: number) =>
                                <RouteWithSubRoutes key={i} {...route} />
                            )
                        }
                        {!hideEncapsuledRoutes && <MenuBottom token={token} page={`${location.pathname}?token=${token}`} {...this.props}/>}
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

export default AppComponent