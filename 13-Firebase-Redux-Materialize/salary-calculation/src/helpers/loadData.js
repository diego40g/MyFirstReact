import { doc, getDoc, db } from '../firebase/config-firebase'
export const loadData = async(uid) => {
    const path = doc(db, `${uid}`, "nomina")
    const nominaList = await getDoc(path)
    console.log(nominaList);

    //const data= nominaList.data()
    const data= []
    return data
}