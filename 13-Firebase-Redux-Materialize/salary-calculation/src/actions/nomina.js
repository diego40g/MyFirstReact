/**
 * {
 *  id: "asdnk123nk1kln1",
 *  fecha: "08/03/2023"
 *  pago: 3000.00
 * }
 *  */
import { db, doc, setDoc } from "../firebase/config-firebase"
export const createRegister = (pago) => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth
        const datos = {
            fecha: new Date(),
            pago,
        }
        const reference = await setDoc(doc(db, `${uid}`, "nomina"), datos)
        console.log(reference)
    }
}