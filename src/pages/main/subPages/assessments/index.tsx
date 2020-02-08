import * as React from 'react'
import Assessments from './containers/assessment.container'

class AssessmentsMain extends React.Component<any, any> {
    render() {
        return (
            <Assessments {...this.props} />
        )
    }
}

export default AssessmentsMain