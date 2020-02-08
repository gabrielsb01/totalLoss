import { CHANGED_STEP } from '@core/config/constants/actionType.constant'

const initialState: any = {
  activeStep: 0
}

export default function (state = initialState, action: any) {
  switch (action.type) {
    case CHANGED_STEP:
      return {
        activeStep: action.activeStep
      }
    default:
      return state
  }
}
