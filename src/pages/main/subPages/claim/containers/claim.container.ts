import { connect } from 'react-redux'
import { token as tokenActions } from '@core/actions'
import Claim from '../components/claim.component'
import { providersActions, claimActions } from  '@core/actions'

const mapStateToProps = (state: any) => {
  return{
    TotalPoint:  state.claim.claim &&
                    state.claim.claim.Incident &&
                        state.claim.claim.Incident.TotalPoint,
    Type:   state.claim.claim &&
                state.claim.claim.Incident &&
                    state.claim.claim.Incident.Type,
    Status:   state.claim.claim &&
                state.claim.claim.Incident &&
                    state.claim.claim.Incident.Status, 
    LicensePlate: state.claim.claim &&
                    state.claim.claim.Incident &&
                        state.claim.claim.Incident.LicensePlate    
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    verifyToken: (token: string) => {
        dispatch(tokenActions.verifyToken(token))
    },
    getTowingCompanies: () => {
      dispatch(providersActions.getTowingCompanies())
    },
    clearNewClaim: () => {
      dispatch(claimActions.clearNewClaim())
  }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Claim)