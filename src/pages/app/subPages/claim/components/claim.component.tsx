import * as React from 'react'
import { ClaimIProps, ClaimIStates } from './../interfaces/claim.interface'
import { Field, reduxForm } from 'redux-form'

// Components
import Header from '@components/header'
import Panel from '@components/panel'
import Input from '@components/input/input.component'
import { normalizePlaca, normalizeName } from '@components/mask'

//css
import classNames from 'classnames/bind'
const styl: any = require('./../css/claim.component.styl')
const cx = classNames.bind(styl)

//Material.ui
import { Typography, IconButton, Grid, Button } from '@material-ui/core'
import { Edit, Done } from '@material-ui/icons'

class Claim extends React.Component <ClaimIProps, ClaimIStates> {
    constructor(props: ClaimIProps) {
        super(props)
        this.state = {
            disableEdit: true
        }
    }
    handleSubmitForm = (values) => {
        const { disableEdit } = this.state
        if(!disableEdit){
            this.props.updateClaim(values)
        }
        this.setState({ disableEdit: !disableEdit })
    }
    render () {
        const { disableEdit } = this.state
        const { token, handleSubmit, ClaimNumber, TowTruckDriverName, color } = this.props
        const style = {
            backgroundColor:  `#${color}`
          }
        return ( 
            <React.Fragment>
                <Header title="Dados do Sinistro" {...this.props} />
                <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                    <div className={cx('content')}>
                        <Typography style={{ paddingBottom: 15 }}>Olá {TowTruckDriverName ? TowTruckDriverName: ''}, confira os dados por segurança. Caso algum esteja incorreto, favor marcar para corrigi-lo</Typography>
                        <Panel
                            title={`Sinistro - ${ClaimNumber ? ClaimNumber:''}`}
                            actions={
                                disableEdit ?
                                <IconButton onClick={() => this.setState({ disableEdit: !disableEdit })}>
                                    <Edit />
                                </IconButton>
                                :
                                <IconButton type="submit">
                                    <Done />
                                </IconButton>
                            }
                        >
                            
                            <Grid container spacing={2} className={cx('conteudo')}>
                                <Grid item xs={12}>
                                    <Field
                                        name="TowTruckDriverName"
                                        label="Prestador"
                                        type="text"
                                        component={Input}
                                        fullWidth
                                        disabled={disableEdit}
                                        normalize={normalizeName}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="LicensePlate"
                                        label="Placa"
                                        type="text"
                                        component={Input}
                                        fullWidth
                                        disabled={disableEdit}
                                        normalize={normalizePlaca}
                                    />
                                </Grid>
                            </Grid>
                            
                        </Panel>
                        <Button 
                            className={cx('confirmButton')} 
                            color="primary" 
                            style={style}
                            variant="contained" 
                            fullWidth
                            disabled={!disableEdit}
                            onClick={() => this.props.history.push(`/app/questions/?token=${token}`)}
                        >
                            CONFIRMAR DADOS
                        </Button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default reduxForm({
    form: "Claim"
})(Claim as any)