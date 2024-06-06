
import React from 'react'
import "./VansDetailContent.css"
import { useOutletContext } from 'react-router-dom'


export const VansDetailContent = () => {
    const {apiData}= useOutletContext();
    return (
        <>
            <div className="vansDetailContent-cotainer">
                <div className="host-van-detail-van-title">
                    <span className="detail-descrip-van">Name: </span>
                    <span className="detail-descrip-van-contenet">{apiData.name}</span>
                </div>
                <div className="host-van-detail-van-category">
                    <span className="detail-descrip-van">Category: </span>
                    <span className="detail-descrip-van-contenet">{apiData.type}</span>
                </div>
                <div className="host-van-detail-van-details">
                    <span className="detail-descrip-van">Description: </span>
                    <span className="detail-descrip-van-contenet">{apiData.description}</span>
                </div>
                <div className="host-van-detail-van-visibility">
                    <span className="detail-descrip-van">Visibility: </span>
                    <span className="detail-descrip-van-contenet">{apiData ? "Public" : "Private"}</span>
                </div>
            </div>

        </>
    )
}
