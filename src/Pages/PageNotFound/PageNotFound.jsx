
import React from 'react'
import "./PageNotFound.css"
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
    // # 404 Page Not Found 
    return (
        <div className="pageNotFound-container">
            <p className="pageNotFond-content">
                Sorry, the page you were looking for was not found.
            </p>
            <div className="pageNotFound-link">
                <Link to="/">Return to home</Link>
            </div>
        </div>
    )
}
