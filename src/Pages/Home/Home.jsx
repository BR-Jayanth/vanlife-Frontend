import React from 'react'
import styles from "./Home.module.css"
// import "./Home.css"

import { Link } from 'react-router-dom'

export const Home = () => {
  // home page of the application
  return (
    <div className={styles.homeContainer}>
      
      <div className={styles.homeContent}>
        <h1>
          You got the travel plans, we got the travel vans.
        </h1>
        <div className={styles.homeContent2}>
          <p>
            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
          </p>
          <div className={styles.homeLink}>
            <Link to="/vans" className={styles.linkButtonHome} >Find your van</Link>
          </div>

        </div>
      </div>
    </div>
  )
}
