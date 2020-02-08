import * as React from 'react'
import { Chip } from '@material-ui/core'
 
export const ChipButton: any = ({ input, label, ...rest }) => (
    <Chip 
        label={label}
        {...input}
        {...rest}
        color={input.value == 'true' ? 'primary':'default'}
        onClick={() => input.onChange(input.value == 'true' ? 'false' : 'true')}
    />
)