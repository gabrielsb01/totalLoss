import * as React from 'react'
import CardComponent from './containers/card.container'
import { IProps, IStates } from './interfaces/card.interface'

class CardMain extends React.Component<IProps, IStates> {
    render () {
        return (
            <CardComponent  {...this.props} />
        )
    }
}

export default CardMain