"use client"
import React, { useContext } from 'react'
import { ImageGenOptions } from '@/app/global-state/ImageGeneration';

const UpscaleHdrInputs = () => {
  const {hdr, setHdr} = useContext(ImageGenOptions)
  return (
    <div title='The HDR improvement over the original image' className='flex justify-between items-center w-full'>
        <input value={hdr} onChange={(e)=> setHdr((e.target.value))} type="range" min="0" max="100" className="block w-[70%] h-2 appearance-none rounded-full bg-white focus:outline-none"/>
        <input value={hdr} onChange={(e)=> setHdr((e.target.value))} type="number" min="0" max="100" className="w-16 h-8 appearance-none focus:outline-white outline-1 bg-black text-white rounded-md p-2"/>
    </div>
  )
}

export default UpscaleHdrInputs