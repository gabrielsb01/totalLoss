import { connect } from 'react-redux'
import Header from './../components/header.component'

const mapStateToProps = (state: any) => {
  return{
    verifity: state.claim.success,
    color: state.claim.claim && 
              state.claim.claim.Company && 
                state.claim.claim.Company.PrimaryColor,
    logoUrl: state.claim.claim && 
                state.claim.claim.Company && 
                  state.claim.claim.Company.Logo,
    logoUrlAuth:  state.sendClaim && 
                    state.sendClaim.payload &&
                      state.sendClaim.payload.logo,
    finalized: state.claim.finalized
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)