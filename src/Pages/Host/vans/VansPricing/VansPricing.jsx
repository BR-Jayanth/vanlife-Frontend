
import React from 'react'
import "./VansPricing.css"
import { useOutlet, useOutletContext, useParams } from 'react-router-dom'

export const VansPricing = () => {
 //  display vans price on hostvan detail/price  page in host/vans route 
    const {apiData}=useOutletContext();
  return (
    <>
     <div className="vansPricing-container">
        <span className="vansPricing-price">${apiData.price}</span>
        <span className="vansPricing-text">/day</span>
     </div>
    </>
  )
}
