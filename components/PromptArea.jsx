"use client"
import React, { useContext, useState } from 'react'
import { ImageGenOptions } from '@/app/global-state/ImageGeneration';
import ActionBtn from "./ActionBtn";
import { Switch } from "@/components/ui/switch";


const PromptArea = () => {
    const { setPrompt, setNegativePrompt, imagesQuantity, aspectRatio, hdr, upscaleIntensity, prompt, negativePrompt, setImageUrls} = useContext(ImageGenOptions)
    const [isNegPrompt, setIsNegPrompt] = useState(false)

    
    
    const imageFetchBody = {
        quantity: imagesQuantity,
        width: aspectRatio.width,
        height: aspectRatio.height,
        prompt: prompt,
        negativePrompt: negativePrompt
    }
    
    const imageUpscaleBody = {
        hdr: hdr,
        upscaleIntensity: upscaleIntensity
    }
    
    const generateImage = async ()=>{
        try {
            const imagesJSON = await fetch('/api/create-prediction', {method: "POST", body: JSON.stringify(imageFetchBody)})
            const images = await imagesJSON.json()
            setImageUrls(images.urls)
        } catch (error) {
            console.log(error)
        } 
    }


  return (
    <div className="w-full">
        <textarea onChange={(e)=> {setPrompt(e.target.value)}} rows="5" cols="43" name="prompt" id="prompt" className="text-white bg-black rounded-md focus:outline-pendora-yellow outline-1 p-2 w-full"/>
        <div className="flex w-full justify-between items-center">
            <label htmlFor="negative prompt" className="text-white text-lg tracking-tighter font-medium">Negative Prompt</label>
            <Switch id="negative prompt" checked={isNegPrompt} onClick={()=> setIsNegPrompt(prev => !prev)} />
        </div>
        <textarea onChange={(e)=> {setNegativePrompt(e.target.value)}} rows="5" cols="43" name="negative prompt" id="negative prompt" className={`text-white ${!isNegPrompt? 'hidden': 'block'} bg-black rounded-md focus:outline-pendora-yellow outline-1 p-2 w-full`}/>
        <ActionBtn onClick={generateImage} className="mt-4 w-full" >Generate Image</ActionBtn>
    </div>
  )
}

export default PromptArea