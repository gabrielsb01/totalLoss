import * as React from 'react'
import { Card, CardHeader, Chip, CardContent, Typography, CircularProgress, Divider, CardActions, Button } from '@material-ui/core'

import classNames from "classnames/bind"
import { IProps, IStates } from '../interfaces/card.interface'
import { assessmentsService } from '@core/services/assessments/assessments.service'
const styl: any = require('./../css/card.component.styl')
const cx = classNames.bind(styl)

class CardComponent extends React.Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            RowsCount: 0,
            percentCount: 0
        }
    }
    componentDidMount() {
        const { token, statusID, totalCount } = this.props
        //Pagina
        const page = 1
        //Quantidade de Avisos
        const size = 1
        assessmentsService(token, 1, 1, statusID).
        then(item => {
            this.setState({ 
                RowsCount: item.data.RowsCount,
                percentCount: (item.data.RowsCount * 100/totalCount) 
            })
        })
    }

    verifyColor = item => {
        switch  (item) {
            case (0): 
                return '#1DBD55'
            case (1): 
                return '#F7B617'
            case (2): 
                return '#2B387F'
            default: 
                return ''
        }
    }

    verifyClass = item => {
        switch  (item) {
            case (0): 
                return 'colorPrimaryNew'
            case (1): 
                return 'colorPrimaryProgress'
            case (2): 
                return 'colorPrimaryFinalized'
            default: 
                return ''
        }
    }
    render () {
        const { RowsCount, percentCount } = this.state
        const { totalCount, statusName, statusID } = this.props
        return (
            <Card>
                <CardHeader 
                    title="Avisos"
                    subheader={`${statusName} - Detalhes`}
                    action={
                        <Chip label={statusName} color="primary" style={{backgroundColor: this.verifyColor(statusID), color: '#fffff'}} />
                    }
                />
                <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                        <Typography variant="h2">{RowsCount}</Typography><Typography variant="h6">/{totalCount}</Typography>
                    </div>
                    
                    <div className={cx('sending')}>
                        <CircularProgress variant='static' value={percentCount} size={100} thickness={8} classes={{ colorPrimary: cx(this.verifyClass(statusID)) }} />
                        <span>{Math.round(percentCount)}%</span>
                    </div>
                </CardContent>
                <Divider />
                <CardActions>
                    <Button onClick={() => this.props.history.push(`/main/assessments/?status=${statusID}`)}>
                        Listar Avisos
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

export default CardComponent