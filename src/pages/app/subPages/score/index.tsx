import * as React from 'react'
import Score from './containers/score.container'
import { ScoreIProps, ScoreIStates } from './interfaces/score.interface'

class ScoreMain extends React.Component<ScoreIProps, ScoreIStates> {
    render () {
        return (
            <Score {...this.props} />
        )
    }
}

export default ScoreMain