
import React from 'react'
import "./VansPhotos.css"
import { useOutletContext, useParams } from 'react-router-dom'

export const VansPhotos = () => {
  //  display vans pictute on hostvan detail/picture  page in host/vans route 
    const {apiData}= useOutletContext();
  return (
    <>
    <div className="vansPhotos-container">
        <img src={apiData.imageUrl} alt="image" />
    </div>
    </>
  )
}
