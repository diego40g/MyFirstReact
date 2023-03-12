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
            return {};
        case types.nominaRead:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}