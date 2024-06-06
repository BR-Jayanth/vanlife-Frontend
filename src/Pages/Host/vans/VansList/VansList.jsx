
import React, { Suspense, useState } from 'react'
import "./VansList.css"
import { useLoaderData, useParams, redirect, Navigate, Await, defer } from "react-router-dom"
import { HostVansCard } from '../../../../component/HostVansCard/HostVansCard.jsx'

import { getHostVans } from '../../../../API/Api.js'
import { requireAuth } from '../../../../utils.js'
import {getHostVansAxios} from '../../../../API/axios/axiosApi.js'
import { Loader } from '../../../../component/Loader/Loader.jsx'


export const loader = async ({ request }) => {
    // calls api to get all vans related to that paticular host
    // const hostVansPromise = getHostVans()   //  firebase api call
    const hostVansPromise = getHostVansAxios(localStorage.getItem("hostId"))   // springboot custom api call
    return defer({ hostVans: hostVansPromise })

}


export const VansList = () => {
    // vans page on host route
    const params = useParams();
    const loader = useLoaderData()
   

    function renderHostvansElements(hostVans) {
        // Await resolver method that display hostvans using host vanscard component
        const vansListArray = hostVans.map((data) => {
            return <HostVansCard key={data.vanId} id={data.id} vanId={data.vanId} name={data.name} price={data.price} imageUrl={data.imageUrl} />
        })

        return (
            <div className="vans-container">
                {
                    vansListArray
                }
            </div>
        )

    }


    return (
        <>
            <div className="van-list-container">
                <div className="vans-list-title">
                    Your listed vans
                </div>
                <Suspense fallback={<Loader/>}>
                    <Await resolve={loader.hostVans}>
                        {
                            renderHostvansElements
                        }
                    </Await>
                </Suspense>
            </div>
        </>
    )
}
