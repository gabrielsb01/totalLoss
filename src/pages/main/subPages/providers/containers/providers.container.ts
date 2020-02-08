import { connect } from 'react-redux'
import { reset } from 'redux-form'
import Providers from './../components/providers.component'
import { providersActions } from  '@core/actions'
 
const mapStateToProps = (state: any) => {
    return {
        providers: state.providers.providers,
        message: state.providers &&
                    state.providers.message,
        errorSetProviders: state.providers.error,
        color:  state.config && 
                    state.config.config &&
                        state.config.config.PrimaryColor
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
        clearVelues: () => {
          dispatch(reset('Providers'));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Providers)