/**
 * {
 *  id: "asdnk123nk1kln1",
 *  fecha: "08/03/2023"
 *  pago: 3000.00
 * }
 *  */
import { db, addDoc, collection, doc, deleteDoc } from "../firebase/config-firebase"
import { types } from "../types/types"

export const createRegister = (pago) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth
        const datos = {
            fecha: new Date().toLocaleDateString(),
            pago,
        }
        const nominaRef = collection(db, `${uid}`);
        const reference = await Promise.all([
            addDoc(collection(nominaRef, 'nominas', 'nomina'), datos)
        ]);
        
        const elementId = await reference.id
        const newData = {
            ...datos,
            elementId,
        }
        dispatch(create(newData))
    }
}

export const deleteRegister = (id) => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth
        await deleteDoc(doc(db,`${uid}`,'nominas','nomina',`${id}`))
        dispatch(deleteR(id))
    }
}

export const readRegister = (data) => {
    return {
        type: types.nominaRead,
        payload: data
    }
}

export const create = (data) => {
    return {
        type: types.nominaAdd,
        payload: data
    }
}

export const deleteR = (id) => {
    return {
        type: types.nominaDelete,
        payload: id,
    }
}

export const clean = () => {
    return {
        type: types.nominaClean
    }
}