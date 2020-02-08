import { connect } from 'react-redux'
import Claim from './../components/claim.component'
import { claimActions }  from '@core/actions'

const mapStateToProps = (state: any) => {
  return{
    token: state.claim.token,
    color: state.claim.claim && 
              state.claim.claim.Company && 
                state.claim.claim.Company.PrimaryColor, 
    ClaimNumber: state.claim.claim.Incident.ClaimNumber,
    TowTruckDriverName: state.claim.claim.Incident.TowTruckDriverName ? 
                    state.claim.claim.Incident.TowTruckDriverName : state.claim.claim.Incident.TowTruckDriver.Name,
    initialValues: {
      TowTruckDriverName: state.claim.claim.Incident.TowTruckDriverName ? 
                      state.claim.claim.Incident.TowTruckDriverName : state.claim.claim.Incident.TowTruckDriver.Name,
      LicensePlate: state.claim.claim.Incident.LicensePlate,
      WorkProviderFone: state.claim.claim.Incident.WorkProviderFone
    }
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateClaim: (values: object) => {
      dispatch(claimActions.updateClaim(values))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Claim)