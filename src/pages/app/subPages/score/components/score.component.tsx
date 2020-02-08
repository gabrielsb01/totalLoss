import * as React from 'react'
import { ScoreIProps, ScoreIStates } from '../interfaces/score.interface'
import { Redirect } from 'react-router-dom'
//css 
import classNames from 'classnames/bind'
const styl: any = require('./../css/score.component.styl')
const cx = classNames.bind(styl)

//Components
import Header from '@components/header'
//Material
import { Grid, Card, CardHeader, CardContent, Typography, Button } from '@material-ui/core'

//Images
const step3: any = require('@assets/images/step3.svg')
const step5: any = require('@assets/images/step5.svg')

class Score extends React.Component<ScoreIProps, ScoreIStates> {
    constructor(props: ScoreIProps) {
        super(props)
        this.state = {
        }
    }
    render () {
        const { claim, token, color } = this.props
        if(claim.Status == 2){
            return <Redirect to={`/app/confirmed/?token=${token}`} />
        }
        else {
            const style = {
                backgroundColor:  `#${color}`
            }
            
            return (
                <React.Fragment>
                    <Header title="Classificar Avarias" {...this.props} /> 
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
                        <Grid item xs={12}>
                            <Button
                                className={cx('confirmButton')} 
                                color="primary" 
                                style={style}
                                variant="contained" 
                                fullWidth
                                onClick={() => this.props.finalizeClaim()}
                            >
                                Confirmar e Enviar
                            </Button>
                        </Grid>
                    </Grid>
                </React.Fragment>
            )
        }
    }
}

export default Score