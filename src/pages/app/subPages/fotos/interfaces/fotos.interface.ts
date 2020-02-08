import { History } from 'history'
export interface FotosIProps {
    score?: number
    history?: History
    updateGalery?(galery: any): void
    galery?: any
    token?: string
    sending?: boolean
    errorUpload?: boolean
    OpenModal?(open: any): void
    open?: any
    GaleryPhoto?(): void
    color?: any
    DeletePhoto?(token: string, id: any): void
    
}

export interface FotosIStates { 
    galery?: any
    snackbarOpen?: any
    activeStep?: any
    openPhoto?: any
    file?: any
    openSubtitle?: any
    temporaryImage?: any
    menu?: any
}