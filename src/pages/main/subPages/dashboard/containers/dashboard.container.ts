import { connect } from 'react-redux'
import Dashboard from '../components/dashboard.component'
 
const mapStateToProps = (state: any) => {
    return {
        token: state.auth.token
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)