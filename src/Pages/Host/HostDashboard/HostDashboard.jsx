
import React, { Suspense } from 'react'
import { defer, Navigate, Outlet, redirect, Await, useLoaderData, Link } from 'react-router-dom'
import starIcon from "../../../assets/HostDashboard/Star 3.png"
import "./HostDashboard.css"

import { getHostVans } from '../../../API/Api.js'
import { HostVansCard } from '../../../component/HostVansCard/HostVansCard.jsx'
import {getHostVansAxios} from "../../../API/axios/axiosApi.js"
import { Loader } from '../../../component/Loader/Loader.jsx'

export function loader() {
  // gets vans based on hostId
  // const hostVansProise = getHostVans() // firebase api call 
  const hostVansProise =getHostVansAxios(localStorage.getItem("hostId"))   // springboot custom api call
  return defer({ hostVans: hostVansProise })
}
export const HostDashboard = () => {
  // host dashboard on host route
  const loader = useLoaderData()

  function renderHostvansElements(hostVans) {
    // Await resolver function that displays host vans using hostvan card
    const vansListArray = hostVans.map((data) => {
      return <HostVansCard key={data.vanId} id={data.id} vanId={data.vanId} name={data.name} price={data.price} imageUrl={data.imageUrl} />
    })

    return (
      <div className="hostDashboard-vans-container">
        {
          vansListArray
        }
      </div>
    )
  }

  return (
    <>
      <div className="hostDasboard-container">
        <div className="hostDashboard-content-container">
          <div className="hostDashboard-main-content">
            <div className="hostDashboard-main-left">
              <h1>Welcome!</h1>
              <h3>Income last <span className='Dashboard-da'>30 days</span></h3>
              <div className="hostDashboard-main-left-price">
                $2,260
              </div>
            </div>
            <div className="hostDashboard-main-right">
              <div className="hostDashboard-details">
                <Link className="hostDashboard-link" to="income">Details</Link>

              </div>
            </div>
          </div>
          <div className="hostDashboard-review-content">
            <div className="hostDashboard-review-content-left">
              <div className="hostDashboard-review-content-review">
                Review Score
              </div>
              <div className="hostDashboard-review-content-score">
                <img src={starIcon} alt="startIcon" /><span className='Dashboard-review'>5.0</span>
                <span className='Dashboard-review-count'>/5</span>

              </div>
            </div>
            <div className="hostDashboard-review-content-right">
              <div className="hostDashboard-details">
                <Link className="hostDashboard-link" to="reviews">Details</Link>
              </div>
            </div>
          </div>
        </div>

        <>
          <div className="hostDashboard-van-list-container">
            <div className="HostDasboard-van-list-main-container">
              <div className="hostDashboard-vans-list-title">
                Your listed vans
              </div>
              <div className="hostDashboard-van-list-view-all">
                <Link className="hostDashboard-link" to="vans">View all</Link>
               
              </div>
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
      </div>
    </>
  )
}
