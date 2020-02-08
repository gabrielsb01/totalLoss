import * as React from 'react'
import { FinalizedIProps, FinalizedIStates } from '../interfaces/finalized.interface'
import { Redirect } from 'react-router-dom'
//css 
import classNames from 'classnames/bind'
const styl: any = require('./../css/finalized.component.styl')
const cx = classNames.bind(styl)

//Components
import Header from '@components/header'
//Material
import { Grid, Card, CardHeader, CardContent, Typography, Button } from '@material-ui/core'

//Images
const step3: any = require('@assets/images/step3.svg')
const step5: any = require('@assets/images/step5.svg')

class Finalized extends React.Component<FinalizedIProps, FinalizedIStates> {
    constructor(props: FinalizedIProps) {
        super(props)
        this.state = {
        }
    }
    render () {
        const { claim, token } = this.props
        return(
            <React.Fragment>
                <Header title="Processo Concluído" {...this.props} /> 
                <Grid container spacing={2} className={cx('content')}>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader
                                title="Classificação dos danos"
                            />
                            <CardContent>
                                <img
                                    src={step5}
                                />
                                <Typography variant="h5">{claim.TotalPoint} Pontos</Typography>
                                {
                                    claim.Type == 1 ?
                                    <Typography>Com base nos dados informados, o veículo foi classificado como <b>Recuperável</b>, leve- o para a oficina</Typography>
                                    :
                                    <Typography>Com base nos dados informados, o veículo foi classificado como <b>Perda Total</b>, leve- o para o pátio de salvados.</Typography>
                                }
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

export default Finalized