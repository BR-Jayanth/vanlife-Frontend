import React, { useEffect } from 'react'
import "./Vans.css"
import { Await, defer, Link, useLoaderData, useSearchParams } from 'react-router-dom'
import { VansCard } from '../../component/VansCard/VansCard.jsx';
import { getVans } from "../../API/Api.js"
import { getVansAxios } from '../../API/axios/axiosApi.js';
import { Loader } from '../../component/Loader/Loader.jsx';



export async function loader() {
    //calling api inside loader
    // const vansPromise = getVans() // firebase api call
    const vansPromise = getVansAxios() //springboot custom api call
    return defer({ vans: vansPromise })
}


export const Vans = () => {
    // calls api to get all van details and displays using vans card component 
    // and also displays based on the filter the user has used

    const [searchParams, setSearchParams] = useSearchParams();
    const loaderData = useLoaderData();
    const typeFilter = searchParams.get("type")

    const handleFilterChange = (key, value) => {
        // to set or merge the searchParams with filter criteria
        setSearchParams((prevSearchParams) => {
            return {
                ...prevSearchParams,
                [key]: value == null ? "" : value,

            }
        })
    }

    function renderVansElements(vansApiData) {
        // Await resolver method that displays all vans if no filter is selected else displays only particular filter van type
        const filteredVansCardArray = typeFilter ? vansApiData && vansApiData.filter((data) => data.type === typeFilter) : vansApiData;
        const vansCardArray = filteredVansCardArray.map((data) => {
            // returns vancard component based on filter applied
            return (

                <Link key={data.id} className="card-container-link" to={`/vans/${data.vanId}`} state={
                    {
                        search: searchParams.toString(),
                        type: searchParams.get("type")
                    }
                } aria-label={`View details for ${data.name},priced at ${data.price} per day`}>
                    <VansCard key={data.vanId} id={data.id} vanId={data.vanId} name={data.name} price={data.price} imageUrl={data.imageUrl} type={data.type} description={data.description} />
                </Link>
            )

        })


        return (
            <>

                <div className="vans-filter">
                    <div className="vans-btn-conatiner">
                        <div onClick={() => setSearchParams({ type: "simple" })} className={`vans-btn sm ${searchParams.get("type") === "simple" && "smSelected"}`}>Simple</div>
                        <div onClick={(e) => handleFilterChange("type", "luxury")} className={`vans-btn lu ${searchParams.get("type") === "luxury" && "luSelected"}`} >Luxury</div>
                        <div onClick={() => handleFilterChange("type", "rugged")} className={`vans-btn ru ${searchParams.get("type") === "rugged" && "ruSelected"}`} >Rugged</div>
                    </div>
                    {searchParams.get("type") &&
                        <div className="vans-filter-link">
                            <Link to={`.`}>Clear filter</Link>
                        </div>
                    }
                </div>
                <div className="cards-container">
                    {
                        vansCardArray
                    }
                </div>
            </>
        )
    }

    return (
        <div className="container">
            <div className="vans-heading">
                <h1>
                    Explore our van options
                </h1>
            </div>
            <React.Suspense fallback={<Loader />}>
                <Await resolve={loaderData.vans}>
                    {
                        renderVansElements
                    }
                </Await>
            </React.Suspense>

        </div>
    )
}
