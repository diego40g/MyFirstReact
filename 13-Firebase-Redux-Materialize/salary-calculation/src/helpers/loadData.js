import { getDocs, db, collection } from '../firebase/config-firebase'
export const loadData = async(uid) => {
    const path = collection(db, `${uid}`, "nominas", "nomina")
    const nominaList = await getDocs(path)
    const data= []
    nominaList.forEach((nomina) => {
        const nominaData = nomina.data()
        data.push({
            id: nomina.id,
            ...nominaData
        })
    });
    
    return data
}