
import React from 'react'
import "./HostVansCard.css"
import { Link } from 'react-router-dom'

export const HostVansCard = (props) => {
    // hostvan card on host dashboard
    return (
        <>
            <Link className='host-card-link' to={`/host/vans/${props.vanId}`}>

                <div className="Host-card-container">
                    <div className="card-img">
                        <img src={props.imageUrl} alt={props.name} />
                    </div>
                    <div className="card-content">
                        <div className="host-card-title">
                            {props.name}
                        </div>
                        <div className="price">
                            ${props.price}/day
                        </div>
                    </div>

                </div>
            </Link>
        </>
    )
}
