import * as React from 'react'
import { Grid, Breadcrumbs, Typography, Chip, Card, CardHeader, CardContent, FormControlLabel, Radio, IconButton, CardActions, Button, Table, TableHead, TableRow, TableCell, TableBody, Tooltip } from '@material-ui/core'
import { Field, reduxForm, reset, change} from 'redux-form'
import { ChipButton } from '@components/chipButton/chipButton.component'
import { RadioButton } from '@components/radioButton/radioButton.component'
import Input from '@components/input/input.component'
import { Check, Edit, Sms, PersonAdd, Delete } from '@material-ui/icons'

const createTextMask: any =  require('redux-form-input-masks').createTextMask

const validate = (values) => {
    const errors: any = {}
    const requiredFields = ['Mobile']
  
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Campo Obrigatório'
      }
    })
    return errors
  }


class Collaborators extends React.Component <any, any> {
    state = {
        enableAdd: false,
        isEdit: null,
    }
    handleSubmitForm = (values) => {
        
        const { isEdit } = this.state
        if(isEdit){
            const payload = {
                ...isEdit,
                Mobile: `${values.Mobile}`,
                Name: values.Name
            }
            
            this.props.updateTowTruckDrivers(payload)
        }
        else {
            const payload = {
                Mobile: `${values.Mobile}`,
                Name: values.Name
            }
            this.props.setTowTruckDrivers(payload)
        }
        this.setState({ enableAdd: false, isEdit: null })
        this.props.dispatch(reset('Collaborators'))
    }  

    handleChange = (values) => {
        this.setState({ isEdit: values, enableAdd: true })
        this.props.dispatch(change('Collaborators', 'Name', values.Name ))
        this.props.dispatch(change('Collaborators', 'Mobile', values.Mobile ))
    }

    componentDidMount() {
        this.props.getTowTruckDrivers()
    }
    render() {
        const { enableAdd } = this.state
        const { handleSubmit, collaborators, color } = this.props
        const style = {
            backgroundColor:  `#${color}`
        }
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Breadcrumbs>
                        <Typography>Principal</Typography>
                        <Chip label="Colaboradores" />
                    </Breadcrumbs>
                </Grid>
                {
                    enableAdd &&
                        <Grid item xs={12}>
                            <Card>
                                <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                                    <CardHeader 
                                        title="Adicionar Novo Colaborador"
                                    />
                                    <CardContent>
                                        
                                            <Grid container spacing={2}>
                                                <Grid item xs={6}>
                                                    <Field 
                                                        name="Name"
                                                        type="text"
                                                        component={Input}
                                                        label="Nome"
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Field 
                                                        name="Mobile"
                                                        type="text"
                                                        component={Input}
                                                        label="Telefone"
                                                        required
                                                        {...phoneMask}
                                                    />
                                                </Grid>
                                            </Grid>
                                        
                                    </CardContent>
                                    <CardActions style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <Button variant="contained" onClick={() => this.setState({ enableAdd: false })}>Cancelar</Button>
                                        <Button color="primary" variant="contained" type="submit" style={style}>Salvar</Button>
                                    </CardActions>
                                </form>
                            </Card>
                        </Grid> 
                }
                <Grid item xs={12}>
                    <Card>
                        <CardHeader 
                            title="Colaboradores"
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
                                            ID
                                        </TableCell>
                                        <TableCell>
                                            Nome
                                        </TableCell>
                                        <TableCell>
                                            Telefone
                                        </TableCell>
                                        <TableCell>
                                            Ações
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        collaborators && collaborators.map((item,i) => 
                                            <TableRow key={i}>
                                                <TableCell>
                                                    {item.Id}
                                                </TableCell>
                                                <TableCell>
                                                    {item.Name}
                                                </TableCell>
                                                <TableCell>
                                                    {item.Mobile}
                                                </TableCell>
                                                <TableCell>
                                                    <Tooltip title="Editar Colaborador">
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
            </Grid>
        )
    }
}

const phoneMask = createTextMask({
    pattern: '+99 (99) 99999-9999'
})

export default reduxForm({
    form: "Collaborators",
    destroyOnUnmount: false,
    enableReinitialize: true,
    validate
})(Collaborators as any)