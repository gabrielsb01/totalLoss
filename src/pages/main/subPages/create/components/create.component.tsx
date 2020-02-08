import * as React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'

// Components
import { normalizePlaca } from '@components/mask'
import Input from '@components/input/input.component'
import AutoComplete from '@components/autocomplete/autocomplete.component'
const createTextMask: any =  require('redux-form-input-masks').createTextMask

//Material.ui 
import { Grid, Paper, Button, Typography, Breadcrumbs, Chip, Card, CardHeader, CardContent, FormControlLabel, Switch } from '@material-ui/core'

//CSS
import classNames from 'classnames/bind'
const styl: any = require('./../css/form.component.styl')
const cx = classNames.bind(styl)

const validate = (values) => {
    const errors: any = {}
    const requiredFields = ['LicensePlate', 'TowingCompany']
  
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Campo Obrigatório'
      }
    })
    return errors
  }


class CreateClaim extends React.Component <any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
          successful: false,
          token: null,
          logout: false,
          selectInitial: false,
          activeType: false
        }
    }

    
    componentDidMount() {
        this.props.getTowingCompanies()
    }
      
    handleSubmit = (values) => {
        const { activeType } = this.state
        this.props.sendClaim(values, activeType)
    }

    logout = () => {
        this.setState({ logout: true })
        sessionStorage.removeItem('token')
        this.props.checkIfIsValidToken()
    }

    resetForm = () => {
        this.props.resetClaim() 
        this.props.clearVelues()
    } 

    changeType = () => {
        const { activeType } = this.state
        this.setState({ activeType: !activeType })
        this.props.clearVelues()
    } 

    render(){
        const { handleSubmit, initialRequesting, isValidToken, successful, selectStatus, providers, invalid, pristine, color } = this.props
        const { activeType } = this.state
        const style = {
            backgroundColor:  `#${color}`
        }
            if (successful) {
                return(
                <React.Fragment>

                    <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start">

                        <Grid item xs={12} className={cx('form_bg')}>
                            <Typography variant='subtitle1' className={cx('intro_text')}>
                                Aviso Fácil criado com sucesso!
                            </Typography>
                        </Grid>

                        <Grid item xs={2} className={cx('buttonVoltar')} >
                            <Button className={cx('confirmButton')} color="primary" style={style} variant="contained" fullWidth onClick={this.resetForm} >
                                Voltar
                            </Button>
                        </Grid>

                    </Grid>
                    
                </React.Fragment>
                )
            }
            if (!initialRequesting && isValidToken === false) { 
                return (<Redirect to="/auth" />)
              }
              else {
                return(
                <React.Fragment>

                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <Breadcrumbs>
                                <Typography>Principal</Typography>
                                <Chip label="Novo Aviso" />
                            </Breadcrumbs>
                        </Grid>

                        
                        <Grid item xs={12}>
                            
                            <form onSubmit={handleSubmit(this.handleSubmit)}>

                                <Card>
                                    <CardHeader title={'Adicionar novo Aviso'} />
                                    <CardContent> 
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} className={cx('selectType')}>
                                                <FormControlLabel
                                                    control={
                                                        <Switch
                                                            color="primary"
                                                            checked={activeType}
                                                            onChange={() => this.changeType()}
                                                        />
                                                    }
                                                    labelPlacement="start"
                                                    label="Avulso"
                                                />
                                            </Grid>
                                            {
                                                !activeType  ?
                                                    <Grid item xs={12} md={12} className={cx('input_area')}>
                                                        <Field
                                                            type={"text"}
                                                            name={"TowingCompany"}
                                                            label={"Nome do Prestador"}
                                                            placeholder={"Buscar Prestador"}
                                                            component={AutoComplete}
                                                            required
                                                        >   
                                                            {
                                                            providers && providers.map((value) => ({
                                                                    label: value.Name,
                                                                    ...value
                                                                }))
                                                            }
                                                        </Field>
                                                    </Grid>
                                                    :
                                                    <React.Fragment>
                                                        <Grid item xs={12} md={6} className={cx('input_area')}>
                                                            <Field
                                                                name="TowTruckDriverName"
                                                                component={Input}
                                                                required
                                                                label={'Nome do Colaborador'}
                                                                type="text"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} md={6} className={cx('input_area')}>
                                                            <Field
                                                                name="TowTruckDriverMobile"
                                                                component={Input}
                                                                required
                                                                label={'Telefone'}
                                                                type="text"
                                                                {...phoneMask}
                                                            />
                                                        </Grid>
                                                    </React.Fragment>

                                            }
                                            
                                            <Grid item xs={12} md={6} className={cx('input_area')}>
                                                <Paper elevation={0}>
                                                    <Field
                                                        name="LicensePlate"
                                                        value="LicensePlate"
                                                        component={Input}
                                                        required
                                                        label={'Placa do Veículo'}
                                                        type="text"
                                                        normalize={normalizePlaca}
                                                    />
                                                </Paper>
                                            </Grid>

                                            <Grid item xs={12} md={6} className={cx('input_area')}>
                                                <Paper elevation={0}>
                                                    <Field
                                                        name="ClaimNumber"
                                                        label={'Número do Sinistro'}
                                                        component={Input}
                                                        type="text"
                                                    />
                                                </Paper>
                                            </Grid>
                                        </Grid>

                                        <Grid className={cx('btnForm')} container direction="column" justify="flex-end" alignItems="flex-end" spacing={2}>
                                            <Grid item xs={2} md={2} className={cx('classBtn')}>
                                                <Button disabled={ invalid || pristine } className={cx('confirmButton')} color="primary" variant="contained" fullWidth type={'submit'} style={style}>
                                                    Criar Aviso
                                                </Button>
                                            </Grid>
                                        </Grid>

                                    </CardContent>
                                </Card>

                                
                            </form>
                        </Grid>
                        
                    </Grid>
                </React.Fragment>
                )
            }
    }
}

const phoneMask = createTextMask({
    pattern: '+99 (99) 99999-9999'
})

export default reduxForm({
    form: 'CreateClaim',
    validate
})(CreateClaim)