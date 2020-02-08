import { connect } from 'react-redux'
import Answers from './../components/answers.component'
import { questionsActions } from '@core/actions'

const mapStateToProps = (state: any) => {
  return {
    idConfiguration:  state.claim.claim &&
                        state.claim.claim.Company &&
                          state.claim.claim.Company.Id,
    Answers:  state.claim.claim &&
                state.claim.claim.Incident &&
                  state.claim.claim.Incident.Answers,
    questions: state.question.quiz,     
    claimId: state.claim.token,
    token: state.auth.token
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getCategories: (id: number) => {
      dispatch(questionsActions.getCategories(id))
    },
    sendAnswers: (payload: any, auth?: string) => {
      dispatch(questionsActions.sendAnswers(payload, auth))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Answers)