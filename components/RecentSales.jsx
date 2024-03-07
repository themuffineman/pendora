import React from 'react'
import Sales from './Sales'

const RecentSales = () => {
  return (
    <div>
        <div>Recent Sales</div>
        <div>You made 264 sales this month</div>
        <div>
            <Sales/>
            <Sales/>
            <Sales/>
            <Sales/>
        </div>
    </div>
  )
}

export default RecentSales