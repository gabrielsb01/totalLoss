import * as React from 'react'
import { Field, reduxForm, reset } from 'redux-form'

//Material Components
import { Assignment, Person, Edit, Close, LocalShipping, Done } from '@material-ui/icons'
import { Grid, IconButton, Card, CardHeader, CardContent, Typography, Divider, FormControlLabel, Switch, Snackbar } from '@material-ui/core'

// Components
import { normalizePlaca, PhoneMask } from '@components/mask'
import Input from '@components/input/input.component'
import AutoComplete from '@components/autocomplete/autocomplete.component'

//css
import classNames from 'classnames/bind'
const styl: any = require('../css/data.component.styl')
const cx = classNames.bind(styl)

class Data extends React.Component<any, any> {
    state = {
        disabled: true,
        activeType: false,
        disabledEdit: true,
        save: false
    }

    handleSubmit = (values) => {
        const { config } = this.props
        const { activeType } = this.state
        if(config.TypeCompany == 2){
            if(activeType){
                values = {
                    ...values,
                    TowTruckDriver: {
                        id: null
                    }
                }
            }else {
                values = {
                    ...values,
                    TowTruckDriverName: '',
                    TowTruckDriverMobile: ''
                }
            }
        }
        this.props.updateClaim(values)
        this.setState({disabledEdit: true, save: true})
    }

    changeType = () => {
        const { activeType } = this.state
        this.setState({ activeType: !activeType })
        this.props.dispatch(reset('Data'))
    } 

    render() {
        const { handleSubmit, providers, Company, config, collaborator,  collaborators, avulso } = this.props
        const { activeType, disabledEdit, save } = this.state
        return(
            <Grid container spacing={2} className={cx('content')} alignItems="stretch">
                <Grid item xs={6}>
                    <Card className={cx('card')}>
                        <form onSubmit={handleSubmit(this.handleSubmit)}>
                            <CardHeader 
                                avatar={<Assignment />} 
                                action={
                                    !disabledEdit ? 
                                    <IconButton type={'submit'} className={cx('confirmButton')} color="primary">
                                        <Done />
                                    </IconButton>
                                    :
                                    <IconButton onClick={() => this.setState({ disabledEdit: false })}>
                                        <Edit />
                                    </IconButton>
                                } 
                                title="INFORMAÇÕES DO AVISO"
                            />
                            <CardContent>
                                
                                    <Grid container spacing={2}>
                                        {
                                            config.TypeCompany == 2 ?
                                            <React.Fragment>
                                                {
                                                    !activeType ?
                                                        <Grid item xs={12}>
                                                            <Field 
                                                                type="text"
                                                                name={"TowTruckDriver"}
                                                                label={"Colaborador:"}
                                                                placeholder={"Digite o nome:"}
                                                                component={AutoComplete}
                                                                disabled={disabledEdit}
                                                            >
                                                                {
                                                                    collaborators && collaborators.map((value) => ({
                                                                        label: `${value.Name} - ${value.Mobile}`,
                                                                        ...value
                                                                    }))
                                                                }
                                                            </Field>
                                                        </Grid>
                                                        :
                                                        <React.Fragment>
                                                            <Grid item xs={6}>
                                                                <Field 
                                                                    name="TowTruckDriverName"
                                                                    type="text"
                                                                    label="Nome"
                                                                    component={Input}
                                                                    disabled={disabledEdit}
                                                                />
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <Field 
                                                                    name="TowTruckDriverMobile"
                                                                    type="text"
                                                                    label="Telefone"
                                                                    component={Input}
                                                                    {...PhoneMask}
                                                                    disabled={disabledEdit}
                                                                />
                                                            </Grid>
                                                    
                                                        </React.Fragment>
                                                }
                                                <Grid item xs={12}>
                                                    <FormControlLabel
                                                        control={
                                                            <Switch
                                                                color="primary"
                                                                checked={activeType}
                                                                onChange={() => this.changeType()}
                                                                disabled={disabledEdit}
                                                            />
                                                        }
                                                        labelPlacement="end"
                                                        label="Avulso"
                                                    />
                                                </Grid>
                                            </React.Fragment>
                                            :
                                            <React.Fragment>
                                                <Grid item xs={12} md={12} className={cx('input_area')}>
                                                    <Field
                                                        type={"text"}
                                                        name={"TowingCompany"}
                                                        label={"Nome do Prestador"}
                                                        placeholder={"Buscar Prestador"}
                                                        component={AutoComplete}
                                                        disabled={disabledEdit}
                                                    >   
                                                        {
                                                        providers && providers.map((value) => ({
                                                                label: value.Name,
                                                                ...value
                                                            }))
                                                        }
                                                    </Field>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Field
                                                        name="ClaimNumber"
                                                        label={'Número do Sinistro'}
                                                        component={Input}
                                                        type="text"
                                                        disabled={disabledEdit}
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Field
                                                        name="LicensePlate"
                                                        label="Placa"
                                                        type="text"
                                                        component={Input}
                                                        disabled={disabledEdit}
                                                        fullWidth
                                                    />
                                                </Grid>
                                            </React.Fragment>
                                        }
                                        
                                    </Grid>
                            </CardContent>
                        </form>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className={cx('card')}>
                        <CardHeader avatar={<LocalShipping />} title="INFORMAÇÕES DO PRESTADOR"/>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={6} className={cx('blocInfoXS')}>
                                    <Typography variant="subtitle1" component="h2">
                                        Nome:
                                    </Typography>
                                    <Typography variant="subtitle2" component="p">
                                        {Company && Company.Name? Company.Name: '----'}
                                    </Typography>
                                </Grid>

                                <Grid item xs={6} className={cx('blocInfoXS')}>
                                    <Typography variant="subtitle1" component="h2">
                                        CNPJ:
                                    </Typography>
                                    <Typography variant="subtitle2" component="p">
                                        {Company && Company.CNPJ? Company.CNPJ: '----'}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Divider variant="middle" />
                                </Grid>

                                <Grid item xs={6} className={cx('blocInfo')}>
                                    <Typography variant="subtitle1" component="h2">
                                        E-mail:
                                    </Typography>
                                    <Typography variant="subtitle2" component="p">
                                        {Company && Company.Email? Company.Email: '----'}
                                    </Typography>
                                </Grid>

                                <Grid item xs={6} className={cx('blocInfo')}>
                                    <Typography variant="subtitle1" component="h2">
                                        Ativo:
                                    </Typography>
                                    <Typography variant="subtitle2" component="p">
                                        {Company && Company.Enable == true? 'Sim': 'Não'}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Divider variant="middle" />
                                </Grid>

                                <Grid item xs={12} className={cx('blocInfo')}>
                                    <Typography variant="subtitle1" component="h2">
                                        Descrição:
                                    </Typography>
                                    <Typography variant="subtitle2" component="p">
                                    {Company && Company.Description? Company.Description: '----'}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>

                        <Divider />

                        <CardHeader avatar={<Person />} title="INFORMAÇÕES DO COLABORADOR"/>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={6} className={cx('blocInfoXS')}>
                                    <Typography variant="subtitle1" component="h2">
                                        Nome:
                                    </Typography>
                                    <Typography variant="subtitle2" component="p">
                                        {avulso && avulso.TowTruckDriverName? avulso.TowTruckDriverName: '----'}
                                    </Typography>
                                </Grid>

                                <Grid item xs={6} className={cx('blocInfoXS')}>
                                    <Typography variant="subtitle1" component="h2">
                                        CPF:
                                    </Typography>
                                    <Typography variant="subtitle2" component="p">
                                        {collaborator && collaborator.CPF? collaborator.CPF: '----'}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Divider variant="middle" />
                                </Grid>

                                <Grid item xs={6} className={cx('blocInfo')}>
                                    <Typography variant="subtitle1" component="h2">
                                        Telefone:
                                    </Typography>
                                    <Typography variant="subtitle2" component="p">
                                        {avulso && avulso.TowTruckDriverMobile? avulso.TowTruckDriverMobile: '----'}
                                    </Typography>
                                </Grid>

                                <Grid item xs={6} className={cx('blocInfo')}>
                                    <Typography variant="subtitle1" component="h2">
                                        Ativo:
                                    </Typography>
                                    <Typography variant="subtitle2" component="p">
                                        {collaborator && collaborator.Enable == true? 'Sim': 'Não'}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
                    autoHideDuration={6000}
                    open={save}
                    message="Dados atualizados com sucesso."
                    action={
                        <IconButton onClick={() => this.setState({ save: false })}>
                            <Close />
                        </IconButton>
                    }
                />
            </Grid>
        )
    }
}

export default reduxForm({
    form: 'Data'
})(Data)