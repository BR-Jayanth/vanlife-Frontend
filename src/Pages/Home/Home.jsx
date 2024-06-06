import React from 'react'
import "./Home.css"

import { Link } from 'react-router-dom'

export const Home = () => {
  // home page of the application
  return (
    <div className="home-container">
      
      <div className="home-content">
        <h1>
          You got the travel plans, we got the travel vans.
        </h1>
        <div className="home-content-2">
          <p>
            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
          </p>
          <div className='home-link'>
            <Link to="/vans" className='link-button-home' >Find your van</Link>
          </div>

        </div>
      </div>
    </div>
  )
}
