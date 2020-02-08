import { connect } from 'react-redux'
import CardComponent from '../components/card.component'
 
const mapStateToProps = (state: any) => {
    return {
        token: state.auth.token
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardComponent)