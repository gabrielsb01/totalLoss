export interface IProps{
    title: string,
    fullScreen?: boolean,
    open?:boolean,
    afterClose?: () => void;
}

export interface IStates{ 
    openDialog: boolean
}