import * as React from 'react'
import routes from '../src/core/config/routes'
//import JssProvider from 'react-jss/lib/JssProvider'
import { MuiThemeProvider } from '@material-ui/core/styles'
//import { create } from 'jss'
import MuiTheme from './assets/css/muiTheme'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component<any, any> {

  RouteWithSubRoutes = route => <Route
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />

  public render() {
    const RouteWithSubRoutes = this.RouteWithSubRoutes
    return (
      <React.Fragment>
        <MuiThemeProvider theme={MuiTheme} >
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}

export default App




