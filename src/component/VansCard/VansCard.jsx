
import React from 'react'
import "./VansCard.css"
import {Link} from "react-router-dom"


export const VansCard = (props) => {
  // vans card component
  return (
    
    <div className="vans-card-container">
        <div className="img-container">
            <img src={props.imageUrl} alt={`image of ${props.name}`} />
        </div>
        <div className="vans-card-content">
            <span className='vans-card-title'>{props.name}</span>
            <span className='vans-card-price'><span className='vans-card-price-text'>${props.price}</span><span className='price-day'>/day</span></span>
        </div>
        <div className="vans-card-category">
            <button className={`vans-card-btn ${props.type}`}>{props.type}</button>
        </div>

    </div>
    
  )
}
