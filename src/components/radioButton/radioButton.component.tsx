import * as React from 'react'
import { FormControl, FormLabel, RadioGroup } from '@material-ui/core'


export const RadioButton: any = ({ input, label, children, className, classNameChildren, ...rest }) => (
    <FormControl>
        <FormLabel style={{fontSize: '14px' }}>{label}</FormLabel>
        <RadioGroup 
            {...input}
            {...rest}
            className={classNameChildren}
        >
            {children}
        </RadioGroup>
    </FormControl>
)