import { connect } from 'react-redux'
import FindAddress from './../components/find.component'
import { findAdress } from '@core/actions'

const mapStateToProps = (state: any) => {
  return{
    idConfiguration:  state.claim.claim &&
                        state.claim.claim.Company &&
                          state.claim.claim.Company.Id,
    locations: state.locations &&
                state.locations.locations && state.locations.locations
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getCompany: (id: number) => {
      dispatch(findAdress.getCompany(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindAddress)