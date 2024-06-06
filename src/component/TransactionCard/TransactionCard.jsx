import React from 'react'
import "./TransactionCard.css"

export const TransactionCard = (props) => {
    // transaction card on host income page
    const dateObject = new Date(Date.parse(props.date))

    // Format the date using toLocaleDateString with the desired format
    const formattedDate = dateObject.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        separator: '/'
    });

    return (
        <>
            <div className="transaction-card-container">
                <div className="transaction-card-price">
                    ${props.price}
                </div>
                <div className="transaction-card-date">
                    {formattedDate}
                </div>
            </div>
        </>
    )
}
