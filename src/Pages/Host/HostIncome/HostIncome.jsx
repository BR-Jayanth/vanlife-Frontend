
import React from 'react'
import "./HostIncome.css"
import barGraph from "../../../assets/HostIncome/bargraph.png"
import { TransactionCard } from '../../../component/TransactionCard/TransactionCard'

export const HostIncome = () => {
    // income page in host route
    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]
    const transactionArray = transactionsData.map((transaction) => {
        // render transaction card component
        return <TransactionCard key={transaction.id} price={transaction.amount} date={transaction.date} />
    })

    return (
        <>
            <div className="HostIncome-container">
                <div className="hostIncome-main-content">
                    <div className="hostIncome-main-content-title">
                        Income
                    </div>
                    <div className="hostIncome-main-content-text">
                        <span className="hostIncome-main-content-span-text">
                            Last&nbsp;&nbsp;
                        </span>
                        <span className="hostIncome-main-content-span-days">
                            30 days
                        </span>
                    </div>
                    <div className="hostIncome-main-content-price">
                        $2260
                    </div>
                </div>
                <div className="HostIncome-graph-container">

                </div>
                <div className="hostIncome-transaction-container">
                    <div className="hostIncome-transaction-container-main">
                        <div className="hostIncome-transaction-container-title">
                            Your transactions({`${transactionsData.length}`})
                        </div>
                        <div className="hostIncome-transaction-container-days">
                            <span className="hostIncome-transaction-content-span-text">
                                Last&nbsp;&nbsp;
                            </span>
                            <span className="hostIncome-transaction-content-span-days">
                                30 days
                            </span>
                        </div>
                    </div>
                </div>
                <div className="HostIncome-transaction-detail-container">
                    {transactionArray}
                </div>

            </div>
        </>
    )
}
