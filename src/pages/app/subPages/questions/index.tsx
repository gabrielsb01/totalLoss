import * as React from 'react'
import Questions from './containers/questions.container'
import { QuestionsIProps, QuestionsIStates } from './interfaces/questions.interface'

class QuestionsMain extends React.Component<QuestionsIProps, QuestionsIStates> {
    render() {
        return (
            <Questions {...this.props} /> 
        )
    }
}

export default QuestionsMain