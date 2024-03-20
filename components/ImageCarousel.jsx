"use client"
import { useContext, useState } from "react"
import { ImageGenOptions } from '@/app/global-state/ImageGeneration';
import CardSkeleton from "./CardSkeleton";
import UpscaledImageCard from "./UpscaledImageCard";
import DefaultCarouselCard from "./DefaultCarouselCard";



const ImageCarousel = ({src, index}) => {

  const {hdr, upscaleIntensity, prompt, setImageUrls, imageUrls, negativePrompt} = useContext(ImageGenOptions)
  const [upscaling, setUpscaling] = useState(false)
  const [isUpscaled, setIsUpscaled] = useState(false)
  const [upscaleError, setUpscaleError] = useState(false)
  const calcHdr = hdr/100
  const calcIntentsity = upscaleIntensity/100

  const upscaleFetchBody = {
    hdr: calcHdr,
    intensity: calcIntentsity,
    imgUrl: imageUrls[index],
    prompt: prompt,
    negativePrompt: negativePrompt
  }

  const createUpscale = async ()=>{
    try {
        setUpscaling(true)
        const imageJSON = await fetch('/api/create-upscale', {method: "POST", body: JSON.stringify(upscaleFetchBody)})
        const image = await imageJSON.json()
        setUpscaling(false)
        if(!image.url){
          throw new Error('Failed to Upscale Image')
        }
        console.log("here are upscale urls:", image.url)
        setImageUrls((prev)=> {
          let arrayCopy = [...prev]
          arrayCopy[index] = image.url[0]
          return arrayCopy;
        })
        setIsUpscaled(true)
    } catch (error) {
        console.error(error)
        setUpscaleError(true)
        setTimeout(()=>{
          setUpscaleError(false)
        }, 3000)
    }
  }

  return ( 
  upscaling? (<CardSkeleton index={index} />) : isUpscaled? (<UpscaledImageCard index={index} before={src} after={imageUrls[index]}/>) : (<DefaultCarouselCard index={index} src={src} alt={prompt} createUpscale={createUpscale} upscaleError={upscaleError}/>) //you only added indexes
  )
}

export default ImageCarousel