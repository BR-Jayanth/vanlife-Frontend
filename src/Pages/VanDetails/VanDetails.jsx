import React, { Suspense } from 'react'
import "./VanDetails.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Await, defer, Link, useLoaderData, useLocation, useParams } from 'react-router-dom'
import { getVan } from "../../API/Api.js"
import { getVanAxios } from '../../API/axios/axiosApi.js'
import { Loader } from '../../component/Loader/Loader.jsx';


export const loader = async ({ params }) => {
    // calls the api to get van details for specific id from params and sends promise for Await component
    // const vanPromise = getVan(params.id)  // fire base api call 
    const vanPromise = getVanAxios(params.id) //sprigboot custom api call 
    return defer({ van: vanPromise })
}

export const VanDetails = () => {
    // van details for vans route

    const location = useLocation();
    const loader = useLoaderData();
    const apiData = loader;

 

    function renderVanElement(apiData) {
        // Await resolver method to render van detais
        apiData = apiData[0];
        return (
            <>
                
                <div className="detail-img">
                    <img src={apiData.imageUrl} alt={apiData.name} />
                </div>
                <div className="type">
                    <button className={`btn-type ${apiData.type}`}>{apiData.type}</button>
                </div>
                <div className="detail-name">
                    <h1>{apiData.name}</h1>
                </div>
                <div className="price">
                    <span className="price-amt">${apiData.price}</span>
                    <span className='price-text'>/day</span>
                </div>
                <div className="detail-content">
                    <p>
                        {apiData.description}
                    </p>
                </div>
                <div className="detail-rent-link">
                    <h2>Rent this van</h2>
                </div>
            </>
        )
    }


    return (

        <div className="container">
            <div className="detail-nav">
                <FontAwesomeIcon icon={faArrowLeft} /> <Link to={`..?${location.state.search}`} relative='path'>Back to {`${location.state.type ? location.state.type : "all"}`} vans</Link>
            </div>
            <Suspense fallback={<Loader/>}>
                <Await resolve={loader.van}>
                    {
                        renderVanElement
                    }
                </Await>
            </Suspense>
        </div>
    )
}
