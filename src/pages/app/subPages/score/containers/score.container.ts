import { connect } from 'react-redux'
import Score from './../components/score.component'
import { claimActions } from '@core/actions'

const mapStateToProps = (state: any) => {
  return{
    score: state.question.score,
    color: state.claim.claim && 
              state.claim.claim.Company && 
                state.claim.claim.Company.PrimaryColor,
    claim: state.claim.claim.Incident,
    token:  state.claim.claim &&
              state.claim.claim.Incident &&
                state.claim.claim.Incident.Key
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    finalizeClaim: () => {
      dispatch(claimActions.finalizeClaim())
    } 
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Score)