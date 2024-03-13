"use client"
import { useContext } from "react"
import config from '../config';

const ImagesNumber = () => {
  const {imagesNumber, setImagesNumber} = useContext(ImageGenOptions)

  return (
    config.maxImagesPerUser.map((num)=>(
      <div key={num} onClick={()=>{setImagesNumber(num)}} className={`${imagesNumber === num && 'ring-2 ring-pendora-yellow'}  p-2 size-12 font-medium rounded-md text-white text-center bg-neutral-700 cursor-pointer hover:bg-neutral-800`}>
        {number}
      </div>
    ))
  )
}

export default ImagesNumber