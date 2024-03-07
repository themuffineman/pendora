import React from 'react'
import Sales from './Sales'

const RecentSales = () => {
  return (
    <div className='w-max p-4 h-max flex flex-col gap-4'>
      <div className='flex flex-col w-max h-max p-2 text-white text-md'>
        <div>Recent Sales</div>
        <div>You made 264 sales this month</div>
      </div>
      <div className='grid grid-cols-1 grid-flow-row justify-center content-center'>
          <Sales/>
          <Sales/>
          <Sales/>
          <Sales/>
      </div>
    </div>
  )
}

export default RecentSales