import { getDocs, db, collection } from '../firebase/config-firebase'
export const loadData = async(uid) => {
    const path = collection(db, `${uid}`, "nominas", "nomina")
    const nominaList = await getDocs(path)
    nominaList.forEach((result) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(result.id, " => ", result.data());
    });
    //const data= nominaList.data()
    const data= []
    return data
}