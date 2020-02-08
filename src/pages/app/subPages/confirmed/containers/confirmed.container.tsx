import { connect } from "react-redux"
import Confirmed from "./../components/confirmed.component"

const mapStateToProps = (state: any) => {
  return {
    color: state.claim.claim && 
              state.claim.claim.Company && 
                state.claim.claim.Company.PrimaryColor,
    token:  state.claim.claim &&
              state.claim.claim.Incident &&
                state.claim.claim.Incident.Key,
    btnVerify:  state.claim.claim &&
                  state.claim.claim.Incident &&
                    state.claim.claim.Incident.Type
  }
}

const ConfirmedContainer = connect(
  mapStateToProps,
  null
)(Confirmed as any);

export default ConfirmedContainer;
