import { connect } from 'react-redux'
import Questions from './../components/questions.component'
import { questionsActions } from '@core/actions'

const mapStateToProps = (state: any) => {
  return{
    quiz: state.question.quiz && state.question.quiz,
    color: state.claim.claim && 
              state.claim.claim.Company && 
                state.claim.claim.Company.PrimaryColor,
    idConfiguration:  state.claim.claim &&
                        state.claim.claim.Company &&
                          state.claim.claim.Company.Id,
    question: state.question.question,
    initialValues: state.question.form,
    token: state.claim.claim &&
            state.claim.claim.Incident &&
              state.claim.claim.Incident.Key,
    HasAnswer: state.claim.claim &&
              state.claim.claim.Incident &&
                state.claim.claim.Incident.HasAnswer
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
      selectCategory: (id: number)  => {
        dispatch(questionsActions.selectCategory(id))
      },
      getCategories: (id: number) => {
        dispatch(questionsActions.getCategories(id))
      },
      sendAnswers: (answer: any) => {
        dispatch(questionsActions.sendAnswers(answer))
      },
      clearQuestions: () => {
        dispatch(questionsActions.clearQuestions())
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Questions)
