import { connect } from 'react-redux'
import AppComponent from './../components/app.component'
import { token as tokenActions } from '@core/actions'

const mapStateToProps = (state: any) => {
    return{
        token: state.claim.token,
        request: state.claim.request,
        success: state.claim.success,
        error: state.claim.error,
        claim: state.claim.claim,
        finalized: state.claim.finalized
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        verifyToken: (token: string) => {
            dispatch(tokenActions.verifyToken(token))
        },
        notVerify: () => {
        dispatch(tokenActions.notVerify())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppComponent)