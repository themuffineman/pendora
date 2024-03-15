"use client"
import { useContext } from "react"
import { ImageGenOptions } from '@/app/global-state/ImageGeneration';
import ActionBtn from "./ActionBtn";


const ImageUpscale = () => {
  const {hdr, setHdr, upscaleIntensity, setUpscaleIntensity} = useContext(ImageGenOptions)

  return (
    <div className='w-full p-2 flex flex-col gap-1'>
        <div className='flex flex-col gap-1 w-full'>
            <label className="text-white text-md tracking-tighter font-medium">Intensity</label>
            <div className='flex justify-between items-center w-full'>
                <input value={upscaleIntensity} onChange={(e)=> setUpscaleIntensity((e.target.value))} type="range" min="0" max="100" className="block w-[70%] h-2 appearance-none rounded-full bg-white focus:outline-none"/>
                <input value={upscaleIntensity} onChange={(e)=> setUpscaleIntensity((e.target.value))} type="number" min="0" max="100" className="w-16 h-8 appearance-none focus:outline-white outline-1 bg-black text-white rounded-md p-2"/>
            </div>
        </div>
        <div className='flex flex-col gap-1 w-full'>
            <label className="text-white text-md tracking-tighter font-medium">HDR Improvement</label>
            <div className='flex justify-between items-center w-full'>
                <input value={hdr} onChange={(e)=> setHdr((e.target.value))} type="range" min="0" max="100" className="block w-[70%] h-2 appearance-none rounded-full bg-white focus:outline-none"/>
                <input value={hdr} onChange={(e)=> setHdr((e.target.value))} type="number" min="0" max="100" className="w-16 h-8 appearance-none focus:outline-white outline-1 bg-black text-white rounded-md p-2"/>
            </div>
        </div>
    </div>
  )
}

export default ImageUpscale