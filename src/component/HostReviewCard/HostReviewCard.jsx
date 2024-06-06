import React from 'react'
import "./HostReviewCard.css"
import starIcon from "../../assets/HostReview/Star.png"

export const HostReviewCard = (props) => {
    // Review card
    const reviewStars=[];
    for(let i=0;i<props.rating;i++) {
        reviewStars.push(<img key={i} src={starIcon} alt={`r${i}`} className="HostReviewCard-stars-img" />)
    }

    return (
        <>
            <div className="HostReviewCard-container">
                <div className="HostReviewCard-stars">
                    {
                        reviewStars
                    }
                </div>
                <div className="HostReviewCard-title">
                    <span className="HostReviewCard-title-name">{props.name}</span>
                    <span className="HostReviewCard-title-date">{props.date}</span>

                </div>
                <div className="HostReviewCard-content">
                    {props.text}
                </div>
                <hr className='HostReviewCard-hr'/>
            </div>
        </>
    )
}
