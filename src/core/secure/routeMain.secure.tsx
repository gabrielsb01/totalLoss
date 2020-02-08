import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// tslint:disable-next-line
const privateMainRoute = ({ render: Render, token, secure, finalized,  ...rest } : { render: any, token: string, secure: boolean, finalized: boolean,  rest: any }) => (
  secure ?
    token ?
      (<Route {...rest}
        render={Render}
      />)
      :
      (<Redirect to={'/?user=loginFailed'} />)
  :
  <Route {...rest}
    render={ Render }
  />
)

const mapStateToProps = (state: any) => ({
  token: state.auth.token,
})

export default (connect(mapStateToProps, {})( privateMainRoute) as React.ComponentType<any>)
