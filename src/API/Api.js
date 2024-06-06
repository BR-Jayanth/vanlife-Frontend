import { doc, getDoc,getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db, vansCollectionRef, uerCollectionRef } from "../firebaseConfig.js"

// firebase api setup



export async function getVans() {
    let response = []
    const querySnapshot = await getDocs(vansCollectionRef);
    const unsubscribe= onSnapshot(vansCollectionRef,((onsnapshot)=>{
        response= onsnapshot.docs.map((docs)=>{
            return{
                ...docs.data(),
                id: docs.id
            }
        })
    }))
    console.log("dddddd",response)
    const dataArray = querySnapshot.docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id,
        }
    })
    console.log("ddddd",dataArray)
    return dataArray;
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id);
    const vanSnapshot = await getDoc(docRef);
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }

}




export async function getHostVans() {
    let response = []
    const q = query(vansCollectionRef,where("hostId","==","123"))
    const querySnapshot = await getDocs(q);
    // const unsubscribe= onSnapshot(vansCollectionRef,((onsnapshot)=>{
    //     response= onsnapshot.docs.map((docs)=>{
    //         return{
    //             ...docs.data(),
    //             id: docs.id
    //         }
    //     })
    // }))
    const dataArray = querySnapshot.docs.map((doc) => {

            return {
                ...doc.data(),
                id: doc.id,
            }

    })
    return dataArray;
}
export async function getHostVan(id) {
    const docRef = doc(db, "vans", id);
    const vanSnapshot = await getDoc(docRef);
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }

}



export async function loginUser(cred) {
    const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(cred),
    })
    console.log("inside api", response)
    if (!response.ok) {
        throw {
            message: `Failed to fetch user`,
            statusText: response.statusText,
            status: response.status,
        }
    }
    const data = await response.json();
    console.log("inside api", data)
    // throw {
    //     message: "Incorrect Email or Password !..",
    //     statusText: response.statusText,
    //     status: response.status,
    // }
    return data;

}
