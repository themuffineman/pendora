import React from 'react'
import Sales from './Sales'
import { ScrollArea } from './ui/scroll-area'

const RecentSales = () => {
  return (
    <div className='w-full p-4 h-max flex flex-col gap-4'>
      <div className='w-full p-2 font-bold text-white text-left text-4xl tracking-tighter '>
        Most Remixed Art
      </div>
      <ScrollArea className="h-[20rem] p-4 ring-1 ring-neutral-900 rounded-sm bg-black flex justify-center" >
        <div className='grid grid-cols-1 grid-flow-row gap-4 justify-center content-center w-[100%]'>
          <Sales/>
          <Sales/>
          <Sales/>
          <Sales/>
          <Sales/>
          <Sales/>
          <Sales/>
          <Sales/>
          <Sales/>
          <Sales/>
          <Sales/>
          <Sales/>
          <Sales/>
          <Sales/>
          <Sales/>
          <Sales/>
          <Sales/>
          <Sales/>
          <Sales/>
          <Sales/>
        </div>
      </ScrollArea>
    </div>
  )
}

export default RecentSales