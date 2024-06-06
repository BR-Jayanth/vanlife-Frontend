
import React, { Suspense } from 'react'
import "./VansListDetails.css";
import { Await, defer, Link, NavLink, Outlet, useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { getHostVan } from '../../../../API/Api.js';
import { requireAuth } from "../../../../utils.js"
import {getVanAxios} from "../../../../API/axios/axiosApi.js"
import { Loader } from '../../../../component/Loader/Loader.jsx';


export const loader = async ({ params }) => {
    //calls api 
    // const hostVansPromise = getHostVan(params.id);  // firebase api call
    const hostVansPromise = getVanAxios(params.id);   // springboot custom api call
    return defer({ hostVans: hostVansPromise })
}



export const VansListDetails = () => {
    // vans detail page in host route
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    const loader = useLoaderData();
   
    function renderHostvansDetailElements(hostVans) {
        // Await resolver method  that dislays detailpage 
        const apiData=hostVans[0];
        return (
            <>
                <div className="host-van-detail-item-container">


                    <div className="host-van-detail-imagecontainer">
                        <div className="detail image">
                            <img src={apiData.imageUrl} alt={apiData.name} />
                        </div>
                        <div className="detail-descrip">
                            <button className={`detail-descrip-btn ${apiData.type}`}>{apiData.type}</button>
                            <h2 className="detail-descrip-title">{apiData.name}</h2>
                            <div className="detail-descrip-price">
                                <span className="detail-descrp-price-title">  ${apiData.price} </span>
                                <span className="detail-descrip-price-price">
                                    /day
                                </span>
                            </div>
                        </div>
                    </div>
                    <nav className="host-vans-detail-navbar-container">
                        <ul className='host-vans-detail-navbar-item'>
                            <li><NavLink to={`/host/vans/${apiData.vanId}`} style={({ isActive }) => isActive ? activeStyle : null} end >Details</NavLink></li>
                            <li><NavLink to={`vans/${apiData.vanId}/pricing`} style={({ isActive }) => isActive ? activeStyle : null} end>Pricing</NavLink></li>
                            <li><NavLink to={`vans/${apiData.vanId}/photos`} style={({ isActive }) => isActive ? activeStyle : null} end >Photos</NavLink></li>
                        </ul>
                    </nav>
                    <Outlet context={{ apiData }} />
                </div>
            </>
        )
    }

    return (
        <>
            <div className="host-vans-detail-container">
                <div className="host-van-detail-link">
                    <FontAwesomeIcon icon={faArrowLeft} /> <Link to={".."} relative="path" >Back to all vans</Link>
                </div>
                <Suspense fallback={<Loader/>}>
                    <Await resolve={loader.hostVans}>
                        {
                            renderHostvansDetailElements
                        }
                    </Await>
                </Suspense>

            </div>
        </>
    )
}
