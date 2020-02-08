import * as React from 'react'
import { Grid, Breadcrumbs, Typography, Chip, Card, CardHeader, CardContent, FormControlLabel, Radio, IconButton, CardActions, Button, Table, TableHead, TableRow, TableCell, TableBody, Tooltip, Switch, Snackbar } from '@material-ui/core'
import { Field, reduxForm, reset, change} from 'redux-form'

//Components
import { nomalizeCpfCnpj, normalizeName } from '@components/mask'
import Input from '@components/input/input.component'
import { Check, Edit, Sms, PersonAdd, Delete, Close } from '@material-ui/icons'

const validate = (values) => {
    const errors: any = {}
    const requiredFields = ['LicensePlate', 'tel_prestador']
  
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Campo Obrigatório'
      }
    })

    if (!values.Email) {
        errors.Email = 'Insira um e-mail válido'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
      errors.Email = 'Insira um e-mail válido'
      }
    return errors
  }


class Providers extends React.Component <any, any> {
    state = {
        enableAdd: false,
        isEdit: null,
        errorSetProviders: false
    }

    resetForm = () => {
        this.setState({ enableAdd: false, isEdit: null })
        this.props.clearVelues()
    } 

    handleSubmitForm = (values) => {
        const { isEdit } = this.state
        if(isEdit){
            const payload = {
                ...isEdit,
                ...values
            }
            this.props.updateTowingCompanies(payload)
        }
        else {
            this.props.setTowingCompanies(values)
        }
        this.setState({ enableAdd: false, isEdit: null })
        this.props.dispatch(reset('Providers'))
    }

    componentDidMount() {
        this.props.getTowingCompanies()
    }

    enableChange = (value) => {
        const payload = {
            ...value,
            Enable: !value.Enable
        }
        this.props.updateTowingCompanies(payload)
    }

    handleChange = (values) => {
        this.setState({ isEdit: values, enableAdd: true })
        this.props.dispatch(change('Providers', 'Name', values.Name ))
        this.props.dispatch(change('Providers', 'Email', values.Email ))
        this.props.dispatch(change('Providers', 'CNPJ', values.CNPJ ))
        this.props.dispatch(change('Providers', 'Description', values.Description ))
    }

    componentDidUpdate(prevProps) {
        const { errorSetProviders } = this.props
        if(errorSetProviders != prevProps.errorSetProviders && errorSetProviders){
            this.setState({ errorSetProviders: true})
        }
    }
    render() {
        const { enableAdd, isEdit, errorSetProviders } = this.state
        const { handleSubmit, providers, color, message } = this.props
        const style = {
            backgroundColor:  `#${color}`
        }
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Breadcrumbs>
                        <Typography>Principal</Typography>
                        <Chip label="Prestadores" />
                    </Breadcrumbs>
                </Grid>
                {
                    enableAdd &&
                        <Grid item xs={12}>
                            <Card>
                                <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                                    <CardHeader 
                                        title={isEdit ? "Editar Prestador" : "Adicionar Novo Prestador" } 
                                    />
                                    <CardContent>
                                            <Grid container spacing={2}>
                                                <Grid item xs={6}>
                                                    <Field 
                                                        name="Name"
                                                        type="text"
                                                        component={Input}
                                                        label="Nome da Empresa"
                                                        normalize={normalizeName}
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Field 
                                                        name="CNPJ"
                                                        type="text"
                                                        component={Input}
                                                        label="CNPJ"
                                                        normalize={nomalizeCpfCnpj}
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Field 
                                                        name="Email"
                                                        type="text"
                                                        component={Input}
                                                        label="Email"
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Field 
                                                        name="Description"
                                                        type="text"
                                                        component={Input}
                                                        label="Observações"
                                                    />
                                                </Grid>
                                            </Grid>
                                        
                                    </CardContent>
                                    <CardActions style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <Button variant="contained" onClick={this.resetForm}>Cancelar</Button>
                                        <Button color="primary" variant="contained" type="submit" style={style}>Salvar</Button>
                                    </CardActions>
                                </form>
                            </Card>
                        </Grid> 
                }
                <Grid item xs={12}>
                    <Card>
                        <CardHeader 
                            title="Prestadores"
                            action={
                                <IconButton color="primary" onClick={() => this.setState({ enableAdd: true })}>
                                    <PersonAdd />
                                </IconButton>
                            }
                        />
                        <CardContent>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            Nome
                                        </TableCell>
                                        <TableCell>
                                            CNPJ
                                        </TableCell>
                                        <TableCell>
                                            Email
                                        </TableCell>
                                        <TableCell>
                                            Observações
                                        </TableCell>
                                        <TableCell>
                                            Status
                                        </TableCell>
                                        <TableCell>
                                            Ações
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        providers && providers.map((item,i) => 
                                            <TableRow key={i}>
                                                <TableCell>
                                                    {item.Name}
                                                </TableCell>
                                                <TableCell>
                                                    {item.CNPJ}
                                                </TableCell>
                                                <TableCell>
                                                    {item.Email}
                                                </TableCell>
                                                <TableCell>
                                                    {item.Description}
                                                </TableCell>
                                                <TableCell>
                                                    <Tooltip title={(item.Enable) ? "Ativo" : "Inativo"}>
                                                        <Switch 
                                                            checked={item.Enable}
                                                            value={item.Enable}
                                                            color="primary"
                                                            onChange={() => this.enableChange(item)}
                                                        />
                                                    </Tooltip>
                                                </TableCell>
                                                <TableCell>
                                                    <Tooltip title="Editar Empresa">
                                                        <IconButton size="small" onClick={() => this.handleChange(item)}>
                                                            <Edit fontSize="small" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    }
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={errorSetProviders}
                    autoHideDuration={6000}
                    message={message}
                    action={
                        <IconButton onClick={()=> this.setState({ errorSetProviders: false })}>
                            <Close />
                        </IconButton>
                    }
                />
            </Grid>
        )
    }
}

export default reduxForm({
    form: "Providers",
    destroyOnUnmount: false,
    enableReinitialize: true,
    validate
})(Providers as any)