import { History } from 'history'

export interface ScoreIProps {
    score?: number
    history?: History
    claim?: any
    token?: string
    finalizeClaim?(): void
    color?: any
}

export interface ScoreIStates {

}