
import React from 'react'
import "./Error.css"
import { useRouteError,Link } from 'react-router-dom'

export const Error = () => {
    // Error handler page 
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <div className="errorPage-container">
                <p className="errorPage-content">
                    <div> Error: {error.message}</div>
                    <pre>{error.status} - {error.statusText}</pre>
                </p>
                <div className="errorPage-link">
                    <Link to="/">Return to home</Link>
                </div>

            </div>

        </>

    )
}
