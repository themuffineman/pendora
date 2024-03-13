"use client"
import {useState} from 'react'
import config from '../../config';
import ImagesNumber from "@/components/ImagesNumber";
import AspectRatio from "@/components/AspectRatio";
import ImageUpscale from "@/components/ImageUpscale";
import { Switch } from "@/components/ui/switch";
import ActionBtn from "@/components/ActionBtn";



const Page = ()=>{

    const [imagesQuantity, setImagesQuantity] = useState(1)
    const [aspectRatio, setAspectRatio] = useState(config.aspect_ratios[1])
    const [hdr, setHdr] = useState(50)
    const [upscaleIntensity, setUpscaleIntensity] = useState(50)
    const [isNegPrompt, setIsNegPrompt] = useState(false)
    const [prompt, setPrompt] = useState()
    const [negativePrompt, setNegativePrompt] = useState()


    const changeAspectRatio = (aspect)=>{
        switch (aspect){
            case "square":
                setAspectRatio(config.aspect_ratios[0])
                break;
            case "portrait":
                setAspectRatio(config.aspect_ratios[1])
        }
    }

    const imageFetchBody = {
        quantity: imagesQuantity,
        width: aspectRatio.width,
        height: aspectRatio.height,
        prompt: prompt
    }

    const generateImage = async ()=>{
        try {
            const images = await fetch('/api/create-prediction', {method: "POST", body: JSON.stringify(imageFetchBody)})
        } catch (error) {
            console.log(error)
            
        }
    }
    return (
        <section className="flex flex-col gap-4 items-center w-full">
            <div className="w-full">

                <div className="flex flex-col gap-4 w-full border-b border-neutral-500 p-2">
                    <label className="text-white text-lg tracking-tighter font-medium">Number of images</label>
                    <div className="flex justify-start gap-3 items-center">
                        {config.maxImagesPerUser.map((num)=>(
                            <ImagesNumber key={num} number={num} imagesNumber={imagesQuantity} setImagesNumber={setImagesQuantity}/>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full border-b border-neutral-500 p-2">
                    <label className="text-white text-lg tracking-tighter font-medium">Aspect Ratio</label>
                    <div className="grid grid-cols-2 grid-flow-row gap-2">
                        {config.aspect_ratios.map((aspect)=>(<AspectRatio aspectToDisplay={aspect.title} changeAspectRatio={changeAspectRatio} selectedAspectRatio={aspectRatio.title} />))}
                    </div>
                </div>
                
                <div className="flex flex-col gap-2 w-full border-b p-2 border-neutral-500">
                    <label className="text-white text-lg tracking-tighter font-medium">Upscale Image</label>
                    <ImageUpscale hdr={hdr} setHdr={setHdr} upscaleIntensity={upscaleIntensity} setUpscaleIntensity={setUpscaleIntensity}/>
                </div>
                
                
                <div className="flex flex-col gap-2 p-2">
                    <label htmlFor="prompt" className="text-white text-lg tracking-tighter font-medium">Prompt</label>
                    <textarea onChange={(e)=> {setPrompt(e.target.value)}} rows="5" cols="43" name="prompt" id="prompt" className="text-white bg-black rounded-md focus:outline-pendora-yellow outline-1 p-2"/>
                    <div className="flex w-full justify-between items-center">
                        <label htmlFor="negative prompt" className="text-white text-lg tracking-tighter font-medium">Negative Prompt</label>
                        <Switch id="negative prompt" checked={isNegPrompt} onClick={()=> setIsNegPrompt(prev => !prev)} />
                    </div>
                    <textarea onChange={(e)=> {setNegativePrompt(e.target.value)}} rows="5" cols="43" name="negative prompt" id="negative prompt" className={`text-white ${!isNegPrompt? 'hidden': 'block'} bg-black rounded-md focus:outline-pendora-yellow outline-1 p-2`}/>
                    <ActionBtn className="mt-4" >Generate Image</ActionBtn>
                </div>

            </div>
        </section>
    )
}

export default Page