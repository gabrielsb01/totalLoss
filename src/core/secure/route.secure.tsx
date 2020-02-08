import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// tslint:disable-next-line
const privateRoute = ({ render: Render, token, secure, finalized,  ...rest } : { render: any, token: string, secure: boolean, finalized: boolean,  rest: any }) => (
  secure ?
    token ?
      (<Route {...rest}
        render={Render }
      />)
      :
      (<Redirect to={'/notAllowed'} />)
  :
  <Route {...rest}
    render={ Render }
  />
)

const mapStateToProps = (state: any) => ({
  token: state.claim.claim &&
          state.claim.claim.Incident &&
            state.claim.claim.Incident.Key,
})

export default (connect(mapStateToProps, {})( privateRoute) as React.ComponentType<any>)
