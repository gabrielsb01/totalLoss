import { connect } from 'react-redux'
import Assessments from '../components/assessments.component'
import { photosActions } from '@core/actions'
 
const mapStateToProps = (state: any) => {
    return {
        token: state.auth.token,
        TypeCompany: state.config.config.TypeCompany
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        GaleryPhoto: () => {
            dispatch(photosActions.GaleryPhoto())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Assessments)