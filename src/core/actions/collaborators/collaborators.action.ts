import { 
    GET_COLLABORATORS_REQUEST,
    UPDATE_COLLABORATORS_REQUEST,
    SET_COLLABORATORS_REQUEST
} from '@core/config/constants/actionType.constant'

export const getTowTruckDrivers = () => ({
    type: GET_COLLABORATORS_REQUEST
})

export const updateTowTruckDrivers = (values: any) => ({
    values,
    type: UPDATE_COLLABORATORS_REQUEST
})

export const setTowTruckDrivers = (values: any) => ({
    values,
    type: SET_COLLABORATORS_REQUEST
})