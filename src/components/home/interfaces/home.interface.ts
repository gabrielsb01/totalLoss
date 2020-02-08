import * as React from 'react'
import { History } from 'history'


export interface HomeIProps {
    history?: History
    finalized?: boolean
    verifyToken?(token: string): void
    location?: any
}

export interface HomeIStates {
    searching?: boolean
}   