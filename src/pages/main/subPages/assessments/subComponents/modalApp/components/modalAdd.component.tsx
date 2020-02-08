import * as React from 'react'
import { Dialog, DialogContent, DialogTitle, DialogActions, Button, Grid, Typography, Chip, FormControlLabel, Switch } from '@material-ui/core'
import { Field, reduxForm, reset} from 'redux-form'
import Input from '@components/input/input.component'

//css
import classNames from 'classnames/bind'
import AutoComplete from '@components/autocomplete/autocomplete.component'
import updateClaimService from '@core/services/claim/updateClaim.service'
import { smsService } from '@core/services/sms/sms.service'
const styl: any = require('./../css/modalAdd.component.styl')
const cx = classNames.bind(styl)

const createTextMask: any =  require('redux-form-input-masks').createTextMask
class ModalAdd extends React.Component<any, any> {
    state = {
        activeType: false
    }
    
    handleSubmitForm = (values) => {
        const { activeId, token } = this.props
        updateClaimService(values, activeId)
        .then(item => 
            smsService(token, activeId)
            .then(data => this.props.onClose(), this.props.dispatch(reset('ModalAdd')))
        )
    }

    componentDidMount() {
        this.props.getTowTruckDrivers()
    }

    changeType = () => {
        const { activeType } = this.state
        this.setState({ activeType: !activeType })
        this.props.dispatch(reset('ModalAdd'))
    } 

    render() {
        const { open, handleSubmit, collaborators } = this.props
        const { activeType } = this.state
        return(
            <Dialog open={open} >
                <DialogTitle>Adicionar Colaborador</DialogTitle>
                <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                    <DialogContent>
                        <Grid container spacing={2} style={{ minWidth: '550px'}}>
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
                                !activeType ?
                                    <Grid item xs={12}>
                                        <Field 
                                            type="text"
                                            name={"TowTruckDriver"}
                                            label={"Colaborador:"}
                                            placeholder={"Digite o nome:"}
                                            component={AutoComplete}
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
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Field 
                                                name="TowTruckDriverMobile"
                                                type="text"
                                                label="Telefone"
                                                component={Input}
                                                {...phoneMask}
                                            />
                                        </Grid>
                                    </React.Fragment>
                            }
                            
                            
                        </Grid>
                    </DialogContent>
                    
                    <DialogActions>
                        <Button onClick={() => this.props.onClose()} color="primary">
                            Cancel
                        </Button>
                        <Button color="primary" variant="contained" type="submit">
                            Adicionar e Enviar
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        )
    }
}

const phoneMask = createTextMask({
    pattern: '+99 (99) 99999-9999'
})

export default reduxForm({
    form: "ModalAdd",
    destroyOnUnmount: false,
    enableReinitialize: true,
})(ModalAdd as any)