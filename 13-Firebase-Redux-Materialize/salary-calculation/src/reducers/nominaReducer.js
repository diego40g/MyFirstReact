/**
 * {
 *  id: "asdnk123nk1kln1",
 *  fecha: "08/03/2023"
 *  pago: 3000.00
 * }
 *  */
import {types} from '../types/types'
const initialState = {
    data: []
}
export const nominaReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.nominaAdd:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case types.nominaRead:
            return {
                ...state,
                data: action.payload
            };
        case types.nominaDelete:
            return {
                ...state,
                data: state.data.filter((nomina) => {
                    return nomina.id !== action.payload
                })
            }
        case types.nominaClean:
            return {
                ...state,
                data: []
            }
        default:
            return state;
    }
}