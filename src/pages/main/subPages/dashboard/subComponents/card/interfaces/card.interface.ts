import { History } from 'history'

export interface IProps {
    history: History
    statusID: number
    token?: string
    totalCount: number
    statusName: string
}

export interface IStates {
    RowsCount: number
    percentCount: number
}