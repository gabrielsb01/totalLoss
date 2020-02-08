import * as React from 'react'
import { History } from 'history'


export interface NotAllowedIProps {
    history?: History
    verifyToken?(token: string): void
    location?: any
}

export interface NotAllowedIStates {
    searching?: boolean
}   