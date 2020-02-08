import * as React from 'react'
import { Grid, Card, CardHeader, CardContent, Typography, Chip, LinearProgress, CardActions, CardActionArea, CircularProgress, Button, Divider } from '@material-ui/core'
import CardComponent from './../subComponents/card'
// css
import classNames from "classnames/bind"
import { assessmentsService } from '@core/services/assessments/assessments.service'
const styl: any = require('./../css/dashboard.component.styl')
const cx = classNames.bind(styl)

class Dashboard extends React.Component<any,any> {
    constructor(props: any) {
        super(props)
        this.state = {
            totalCount: null
        }
    }
    componentDidMount() {
        const { token } = this.props
        //Pagina
        const page = 1
        //Quantidade de Avisos
        const size = 1
        assessmentsService(token, 1, 1).
        then(item => {
            this.setState({ 
                totalCount: item.data.RowsCount,
            })
        })
    }
    render () {
        const { totalCount } = this.state
        const { history } = this.props
        return (
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    {
                        totalCount && 
                        <CardComponent 
                            statusID={0} 
                            totalCount={totalCount} 
                            statusName="Novos"
                            history={history}
                        />
                    }
                </Grid>
                <Grid item xs={4}>
                    {
                        totalCount && 
                        <CardComponent 
                            statusID={1} 
                            totalCount={totalCount} 
                            statusName="Em Andamento"
                            history={history}
                        />
                    }
                </Grid>
                <Grid item xs={4}>
                    {
                        totalCount && 
                        <CardComponent 
                            statusID={2} 
                            totalCount={totalCount} 
                            statusName="Concluídos"
                            history={history}
                        />
                    }
                </Grid>
            </Grid>
        )
    }
}

export default Dashboard