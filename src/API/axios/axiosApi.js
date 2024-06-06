import { json } from "react-router-dom";
import api from "./axiosConfig.js"




export async function getVansAxios() {
    // calls api to get all vans
    let data;
    try {
        const response = await api.get("/api/v1/vans");
        data = response.data;
    } catch (error) {
        throw error;
    }
    //    const response = await fetch("http://localhost:8080/api/v1/vans")
    //    return await response.json();
    return data
}



export async function getVanAxios(id) {
    // calls api to get van of specific van id
    let data;
    try {
        const response = await api.get(`/api/v1/van/${id}`);
        data = response.data;
    } catch (error) {
        throw error;
    }
    return data
}

export async function loginUserAxios(cred) {

    // calls api to validate user credential
    let data;
    const myHeaders = new Headers();
    try {
        const response = await api.post(`/api/user`,cred);
        data = response.data;
    } catch (error) {
        throw error;
    }
    return data

}


export async function getHostVansAxios(id) {
    // calls api to get all vans related to specific host based on hostId
    console.log(id)
    let data;
    try {
        const response = await api.post(`/api/v1/hostvans`,{hostId:id});
        data = response.data;
    } catch (error) {
        throw error;
       
    }
    return data
}

