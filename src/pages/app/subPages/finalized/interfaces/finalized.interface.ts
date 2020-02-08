import { History } from 'history'

export interface FinalizedIProps {
    score?: number
    history?: History
    claim?: any
    token?: string
    finalizeClaim?(): void
}

export interface FinalizedIStates {

}