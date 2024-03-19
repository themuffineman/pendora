"use client"
import React, { useContext, useState } from 'react'
import { ImageGenOptions } from '@/app/global-state/ImageGeneration';
import ActionBtn from "./ActionBtn";
import { Switch } from "@/components/ui/switch";
import Toast from './Toast';


const PromptArea = () => {

    const { setPrompt, setNegativePrompt, imagesQuantity, aspectRatio, prompt, negativePrompt, setImageUrls, setLoadingImages, loadingImages, setUpscaleImgs} = useContext(ImageGenOptions)
    const [isNegPrompt, setIsNegPrompt] = useState(false)
    const [fetchError, setFetchError] = useState(false)

    
    
    const imageFetchBody = {
        quantity: imagesQuantity,
        width: aspectRatio.width,
        height: aspectRatio.height,
        prompt: prompt,
        negativePrompt: isNegPrompt? negativePrompt : ''
    }
    
    const generateImage = async () => {
        try {
            setLoadingImages(true)
            const imagesJSON = await fetch('/api/create-prediction', {method: "POST", body: JSON.stringify(imageFetchBody)}) 
            if(!imagesJSON.ok){
                throw new Error('Failed to Generate Image. Try Again')
            }
            const images = await imagesJSON.json()
            if(!images.urls){
                throw new Error('Failed to Generate Image. Try Again')
            }
            else{
                setImageUrls(images.urls)
                setUpscaleImgs(images.urls)
            }
        } catch (error) {
            console.error(error)
            setFetchError(true)
            setTimeout(()=>{setFetchError(false)}, 5000)
            
        } finally{
            setLoadingImages(false)
        }
    }

    


  return (
    <div className="w-full flex flex-col items-center">
        <textarea onChange={(e)=> {setPrompt(e.target.value)}} rows="5" cols="43" name="prompt" id="prompt" className="text-white bg-black rounded-md focus:outline-pendora-yellow outline-1 p-2 w-full"/>
        <div className="flex w-full justify-between items-center">
            <label htmlFor="negative prompt" className="text-white text-lg tracking-tighter font-medium">Negative Prompt</label>
            <Switch id="negative prompt" checked={isNegPrompt} onClick={()=> setIsNegPrompt(prev => !prev)} />
        </div>
        <textarea onChange={(e)=> {setNegativePrompt(e.target.value)}} rows="5" cols="43" name="negative prompt" id="negative prompt" className={`text-white ${!isNegPrompt? 'hidden': 'block'} bg-black rounded-md focus:outline-pendora-yellow outline-1 p-2 w-full`}/>
        <ActionBtn onClick={generateImage} className={`mt-4 w-full ${loadingImages && "pointer-events-none cursor-not-allowed"}`} >Generate Image</ActionBtn>
        {fetchError && <Toast message={'Failed to Generate Image. Try Again'} variant='error'/>}
    </div>
  )
}

export default PromptArea