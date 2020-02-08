import { connect } from 'react-redux'
import ModalAdd from './../components/modalAdd.component'
import { collaboratorsActions } from '@core/actions'

const mapStateToProps = (state: any) => {
  return {
    collaborators: state.collaborators.collaborators,
    token: state.auth.token,
    color:  state.config && 
              state.config.config &&
                  state.config.config.PrimaryColor
}
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTowTruckDrivers: () => {
        dispatch(collaboratorsActions.getTowTruckDrivers())
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalAdd)
