import { connect } from 'react-redux'
import Main from './../components/main.component'
import {  getConfigAction } from '@core/actions/config/config.action'
import { authActions } from '@core/actions'

const mapStateToProps = (state: any) => {
    return {
        config: state.config.config,
        token: state.auth.token,
        denied: state.auth.denied,
        color:  state.config && 
                    state.config.config &&
                        state.config.config.PrimaryColor
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getConfigAction: () => {
            dispatch(getConfigAction());
        },
        logoff: () => {
            dispatch(authActions.logoff())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)