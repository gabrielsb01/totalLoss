export interface IProps {
  title?: any,
  children?: any,
  actions?: any,
  actionClose?: any,
  open?: boolean,
  fullScreenModal?: any,
  maxWidth?: any,
  secondIcon?: any
  typeModal?: string,
  id?: any,
  className?: any
  gallery?(): void
}

export interface IStates {
  isFullScreen: boolean
}
