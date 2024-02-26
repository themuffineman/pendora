import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const PricingCard = ({plan, period='monthly'}) => {
  return (
    <div className="rounded-md flex flex-col w-96 h-[40rem] text-white border p-4 justify-between border-gray-500 backdrop-blur-xl hover:border-white">
        {/* <div className='size-28 max-w-28 max-h-28 rounded-md'>
            <Image
                src={plan.icon}
                layout="fill"
                objectFit='cover'
                className='rounded-md'
            />
        </div> */}
        <div>
            <h3 className='text-4xl font-normal tracking-tighter z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8'>{plan.name}</h3>
            {period === 'monthly'? (<h3 className='text-lg text-gray-500'><span className='text-5xl text-white'>${plan.price}</span>/per month</h3>) : period === 'yearly'? (<h3 className='text-lg text-gray-500'><span className='text-5xl text-white'>${plan.price - (plan.price*0.20)}</span>/per month</h3>): null}
        </div>
        <div className='w-max h-[15rem]'>
            <ul className='list-none flex flex-col gap-2 '>
                
                {
                    plan.featuresIncluded.map((feature)=>(
                        <li className='flex gap-2 item center'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" className='bg-pendora-yellow rounded-md' viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                            <div className='capitalize text-gray-500'>{feature}</div>
                        </li>
                    ))
                }
                
                
            </ul>
        </div>
        <Button variant="primary" className="w-full bg-pendora-yellow text-black p-4 rounded-3xl hover:border-white hover:border ">Subscribe</Button>
    </div>
  )
}

export default PricingCard