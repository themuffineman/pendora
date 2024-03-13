"use client"
import { useContext } from "react"
import config from '../config';
import { ImageGenOptions } from '@/app/global-state/ImageGeneration';

const ImagesNumber = () => {
  const {imagesQuantity, setImagesQuantity} = useContext(ImageGenOptions)

  return (
    config.maxImagesPerUser.map((num)=>(
      <div key={num} onClick={()=>{setImagesQuantity(num)}} className={`${imagesQuantity === num && 'ring-2 ring-pendora-yellow'}  p-2 size-12 font-medium rounded-md text-white text-center bg-neutral-700 cursor-pointer hover:bg-neutral-800`}>
        {num}
      </div>
    ))
  )
}

export default ImagesNumber