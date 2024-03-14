"use client"
import { useContext } from "react"
import { ImageGenOptions } from '@/app/global-state/ImageGeneration';
import ActionBtn from "./ActionBtn";


const ImageUpscale = () => {
  const {hdr, setHdr, upscaleIntensity, setUpscaleIntensity, upscaleImgs, prompt, setLoadingImages, setImageUrls} = useContext(ImageGenOptions)
  const calcHdr = hdr/100
  const calcIntentsity = upscaleIntensity/100
  console.log("heres the hdr value", calcHdr)

  const upscaleFetchBody = {
    hdr: calcHdr,
    intensity: calcIntentsity,
    imgUrl: upscaleImgs? upscaleImgs[0] : '',
    prompt: prompt
  }
  console.log("heres the imgUrl:", upscaleImgs? upscaleImgs[0] : undefined)

  const createUpscale = async ()=>{
    try {
        setLoadingImages(true)
        const imagesJSON = await fetch('/api/create-upscale', {method: "POST", body: JSON.stringify(upscaleFetchBody)})
        const images = await imagesJSON.json()
        setLoadingImages(false)
        console.log("here are upscale urls:", images.urls.output)
        setImageUrls(images.urls.output) 
    } catch (error) {
        
    }
  }

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
        <div>
            <ActionBtn onClick={createUpscale}>Upscale Image</ActionBtn>
        </div>
    </div>
  )
}

export default ImageUpscale