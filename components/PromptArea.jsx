"use client"
import React, { useContext, useState } from 'react'
import { ImageGenOptions } from '@/app/global-state/ImageGeneration';
import ActionBtn from "./ActionBtn";
import { Switch } from "@/components/ui/switch";


const PromptArea = () => {
    const { setPrompt, setNegativePrompt} = useContext(ImageGenOptions)
    const [isNegPrompt, setIsNegPrompt] = useState(false)


  return (
    <div>
        <textarea onChange={(e)=> {setPrompt(e.target.value)}} rows="5" cols="43" name="prompt" id="prompt" className="text-white bg-black rounded-md focus:outline-pendora-yellow outline-1 p-2"/>
            <div className="flex w-full justify-between items-center">
                <label htmlFor="negative prompt" className="text-white text-lg tracking-tighter font-medium">Negative Prompt</label>
                <Switch id="negative prompt" checked={isNegPrompt} onClick={()=> setIsNegPrompt(prev => !prev)} />
            </div>
        <textarea onChange={(e)=> {setNegativePrompt(e.target.value)}} rows="5" cols="43" name="negative prompt" id="negative prompt" className={`text-white ${!isNegPrompt? 'hidden': 'block'} bg-black rounded-md focus:outline-pendora-yellow outline-1 p-2`}/>
        <ActionBtn className="mt-4" >Generate Image</ActionBtn>
    </div>
  )
}

export default PromptArea