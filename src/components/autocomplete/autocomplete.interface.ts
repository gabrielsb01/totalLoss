export interface IProps {
  values: any[],
  label: string,
  meta: any,
  custom?: any,
  children?: any,
  input?: any,
  error: any
}

export interface IStates {
  selectedOption?: any,
  filterOption? : Boolean,
  value?: any
}
