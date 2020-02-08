import { connect } from 'react-redux'
import Data from '../components/data.component'
import { claimActions } from '@core/actions'
import { token as tokenActions } from '@core/actions'
import { Label } from '@material-ui/icons';
import { reset } from 'redux-form'
 
const mapStateToProps = (state: any) => {
    return {
        save: state.claim.claim &&
                state.claim.claim.save,
        providers: state.providers.providers,
        avulso: state.claim.claim &&
                    state.claim.claim.Incident,
        collaborator: state.claim.claim &&
                        state.claim.claim.Incident &&
                            state.claim.claim.Incident.TowTruckDriver &&
                                state.claim.claim.Incident.TowTruckDriver,
        Company: state.claim.claim &&
                    state.claim.claim.Incident &&
                        state.claim.claim.Incident.TowingCompany &&
                            state.claim.claim.Incident.TowingCompany,
        config: state.config.config,
        collaborators: state.collaborators.collaborators,
        initialValues:  state.claim.claim &&
                            state.claim.claim.Incident &&
                                state.claim.claim.Incident.TowingCompany &&
                                {
                                
                                    TowingCompany: {
                                        label: state.claim.claim &&
                                                state.claim.claim.Incident &&
                                                    state.claim.claim.Incident.TowingCompany &&
                                                        state.claim.claim.Incident.TowingCompany.Name,
                                        ...state.claim.claim.Incident.TowingCompany
                                    },
                                    ClaimNumber: state.claim.claim &&
                                                    state.claim.claim.Incident &&
                                                        state.claim.claim.Incident.ClaimNumber,
                                    LicensePlate: state.claim.claim &&
                                                    state.claim.claim.Incident &&
                                                        state.claim.claim.Incident.LicensePlate,
                                    TowTruckDriver: {
                                        label: `${state.claim.claim &&
                                                    state.claim.claim.Incident &&
                                                        state.claim.claim.Incident.TowTruckDriverName} 
                                                                            ${state.claim.claim.Incident.TowTruckDriver.Mobile == null ? '': '-'} 
                                                ${state.claim.claim.Incident.TowTruckDriver.Mobile == null ? '': 
                                                    state.claim.claim.Incident.TowTruckDriver.Mobile}`,
                                        ...state.claim.claim.Incident.TowTruckDriver
                                    }
                                },
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateClaim: (values: object) => {
            dispatch(claimActions.updateClaim(values))
        },
        clearVelues: () => {
            dispatch(reset('Data'));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Data)