import { connect } from 'react-redux'
import Gallery from '../components/gallery.component'

const mapStateToProps = (state: any) => {
  return {
      token: state.auth.token
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery)
