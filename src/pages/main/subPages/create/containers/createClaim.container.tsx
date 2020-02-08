import { connect } from "react-redux";
import CreateClaim from "../components/create.component";
import { reset } from 'redux-form'
import { sendClaim, resetClaim } from "@core/actions/form/form.action"
import { providersActions } from  '@core/actions'

const mapStateToProps = (state: any) => {
  return {
    error: state.sendClaim.error,
    color:  state.config && 
                    state.config.config &&
                        state.config.config.PrimaryColor,
    requesting: state.sendClaim.requesting,
    successful: state.sendClaim.successful,
    isValidToken: state.sendClaim.isValidToken,
    initialRequesting: state.sendClaim.initialRequesting,
    token: state.auth.token,
    providers: state.providers.providers,
    selectStatus: state.form.CreateClaim &&
                    state.form.CreateClaim.values &&
                      state.form.CreateClaim.values.selectList,
    bodyshopDetails:  state.form.CreateClaim &&
                        state.form.CreateClaim.values &&
                          state.form.CreateClaim.values.firstname
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    getTowingCompanies: () => {
      dispatch(providersActions.getTowingCompanies())
    },
    updateTowingCompanies: (values: any) => {
        dispatch(providersActions.updateTowingCompanies(values)) 
    },
    setTowingCompanies: (values: any) => {
        dispatch(providersActions.setTowingCompanies(values))
    },
    sendClaim: (data: any, activeType: number) => {
      dispatch(sendClaim(data, activeType));
    },
    resetClaim: () => {
      dispatch(resetClaim());
    },
    clearVelues: () => {
      dispatch(reset('CreateClaim'));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateClaim as any);
