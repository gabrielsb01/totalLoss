
import { History } from 'history'

export interface QuestionsIProps {
    history?: History
    selectCategory?(id: number):void 
    quiz?: any
    idConfiguration?: number
    question?: any
    token?: string
    HasAnswer?: boolean 
    getCategories?(idConfiguration: number): void
    handleSubmit?(values: object): any
    sendAnswers?(answer: any): void
    clearQuestions?(): void
    color?: any
}

export interface QuestionsIStates { 
    points: number
    question?: number
    categoryPoints?: number
    typeSelectedId?: number 
    typeSelectedPoint?: number
}