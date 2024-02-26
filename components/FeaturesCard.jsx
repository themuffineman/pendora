import React from 'react'
import Image from 'next/image'

const FeaturesCard = ({src,title,description}) => {
  return (
    <div className=" rounded-md flex flex-col w-96 h-[30rem] text-white border border-gray-500 hover:border-white">
        <div className="w-full h-[80%] relative hover:zoom-in-150 ">
            <Image
                src={src}  
                layout="fill"
                objectFit="cover"
                className="rounded-md rounded-b-none  "
            />
        </div>
        <div className="w-full h-[20%] text-white p-4 ">
            <h3 className="text-xl">{title}</h3>
            <p className="text-sm text-gray-500 text-ellipsis">{description}</p>
        </div>
    </div>
  )
}

export default FeaturesCard