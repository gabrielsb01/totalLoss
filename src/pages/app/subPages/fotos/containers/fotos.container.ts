import { connect } from 'react-redux'
import Fotos from './../components/fotos.component'
import { photosActions } from '@core/actions'

const mapStateToProps = (state: any) => {
  return{
    open: state.photos.open,
    color: state.claim.claim && 
              state.claim.claim.Company && 
                state.claim.claim.Company.PrimaryColor,
    errorUpload:  state.photos.errorUpload,
    sending:  state.photos.sending,
    score: state.question.score,
    galery: state.photos.galery,
    token: state.claim.claim &&
            state.claim.claim.Incident &&
              state.claim.claim.Incident.Key
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateGalery: (galery: any) => {
      dispatch(photosActions.updateGaleryApp(galery))
    },
    OpenModal: (payload: any) => {
      dispatch(photosActions.OpenModal(payload))
    },
    GaleryPhoto: () => {
      dispatch(photosActions.GaleryPhoto())
    },
    DeletePhoto: (token: any, id: any) => {
      dispatch(photosActions.deletePhotoApp(token, id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Fotos)
