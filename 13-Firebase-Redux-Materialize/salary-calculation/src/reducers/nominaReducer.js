/**
 * {
 *  id: "asdnk123nk1kln1",
 *  fecha: "08/03/2023"
 *  pago: 3000.00
 * }
 *  */
import {types} from '../types/types'
export const nominaReducer = (state = {}, action) => {
    switch (action.type) {
        case types.nominaAdd:
            return {};
        default:
            return state;
    }
}