import { History } from 'history'

export interface ClaimIProps {
    history?: History
    token?: string
    ClaimNumber?: string
    TowTruckDriverName?: string
    handleSubmit?(values: object): any
    updateClaim?(values: object):any
    color?: any
}

export interface ClaimIStates {
    disableEdit: boolean
}