import React from 'react'
import loadIcon from "../../assets/loader/Hourglass.gif"
import "./Loader.css" 

export const Loader = () => {
    // loader page for application 
    // it will be displayed using suspense react component
    return (
        <div className="loader-container">
            <div className="loader-loading">
            <iframe src="https://giphy.com/embed/OrRrTDGA3XRbwekNmF" width="120" height="120"  frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>
        </div>
    )
}
