import * as React from 'react'
import { Field, reduxForm } from 'redux-form'

//Components
import Input from '../../../components/input/input.component'
import Former from './former.component'

//CSS
import classNames from 'classnames/bind'
const styl: any = require('../css/auth.component.styl')
const cx = classNames.bind(styl)

class Auth extends React.Component<any, any> {

    submitLogin = (event: any) => {
        event.preventDefault()
        const { formValues, userAuth } = this.props
        userAuth(formValues)
    }

    componentWillUnmount(){
        this.props.clearAuth()
    }

    render() {
        return (
            <div className={cx('loginPage')}>
                <Former
                    submitLogin={this.submitLogin}
                    fields={[
                        <Field
                            key={0}
                            type={"text"}
                            name={"Login"}
                            label={"Usuário"}
                            component={Input}
                            control={true}
                        />,
                        <Field
                            key={1}
                            type={"password"}
                            name={"Password"}
                            label={"Senha"}
                            component={Input}
                            control={false}
                            password={true}
                        />
                    ]}
                    {...this.props}
                />
            </div>
        )
    }
}

export default reduxForm({
    form: 'Auth'
})(Auth)