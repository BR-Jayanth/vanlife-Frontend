import React from 'react'
import './HostReview.css'
import { HostReviewCard } from '../../../component/HostReviewCard/HostReviewCard'

export const HostReview = () => {
    // host review page in host route
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]
    const reviewArray= reviewsData.map((review)=>{
        return(
            // render hostreview card component
            <HostReviewCard key={review.id} name={review.name} date={review.date} text={review.text} rating={review.rating}/>
        )
    })

  return (
      <>
       <div className="hostReview-container">
         <div className="hostreview-title-container">
            <div className="hostreview-title">
                Your reviews
            </div>
            <div className="hostReviews-days">
                <span className="hostReview-days-text">last&nbsp;&nbsp;</span>
                <span className="hostReview-days-day">30 days</span>
            </div>
         </div>
         <div className="hostreview-rating-img-container">

         </div>
         <div className="hostreview-review-container">
            <div className="hostreview-review-title">
                Reviews ({``})
            </div>
             {
                reviewArray
             }
         </div>

       </div>
      </>
  )
}
