import { connect } from 'react-redux'
import Photos from '../components/photos.component'
import { token as tokenActions } from '@core/actions'
import { photosActions } from '@core/actions'
 
const mapStateToProps = (state: any) => {
    return {
        galery: state.photos.galery,
        token:  state.claim.token,
        hasImage: state.claim.claim &&
                    state.claim.claim.Incident &&
                        state.claim.claim.Incident.HasImage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateGaleryDesk: (galery: any) => {
            dispatch(photosActions.updateGaleryDesk(galery))
        },
        GaleryPhoto: () => {
            dispatch(photosActions.GaleryPhoto())
        },
        ListPhoto: () => {
            dispatch(photosActions.ListPhoto())
        },
        DeletePhoto: (token: any, id: any) => {
            dispatch(photosActions.deletePhotoDesk(token, id))
        },
        verifyToken: (token: string) => {
            dispatch(tokenActions.verifyToken(token))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Photos)