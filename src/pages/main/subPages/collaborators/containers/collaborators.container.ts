import { connect } from 'react-redux'
import { reset } from 'redux-form'
import { collaboratorsActions } from  '@core/actions'
import Collaborators from '../components/collaborators.component'
 
const mapStateToProps = (state: any) => {
    return {
        collaborators: state.collaborators.collaborators,
        color:  state.config && 
                    state.config.config &&
                        state.config.config.PrimaryColor
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getTowTruckDrivers: () => {
            dispatch(collaboratorsActions.getTowTruckDrivers())
        },
        updateTowTruckDrivers: (values: any) => {
            dispatch(collaboratorsActions.updateTowTruckDrivers(values)) 
        },
        setTowTruckDrivers: (values: any) => {
            dispatch(collaboratorsActions.setTowTruckDrivers(values))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Collaborators)