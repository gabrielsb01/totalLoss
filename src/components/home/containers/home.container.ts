import { connect } from 'react-redux'
import Home from './../components/home.component'
import { token as tokenActions } from '@core/actions'

const mapStateToProps = (state: any) => {
  return{
    finalized: state.claim.finalized
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    verifyToken: (token: string) => {
        dispatch(tokenActions.verifyToken(token))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)