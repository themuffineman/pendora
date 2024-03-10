"use client"
import { Textarea } from "@/components/ui/textarea"
import {useState} from 'react'
import config from '../../config';
import ImagesNumber from "@/components/ImagesNumber";
import AspectRatio from "@/components/AspectRatio";
import CustomAspect from "@/components/CustomAspect";
import ImageUpscale from "@/components/ImageUpscale";
import { Switch } from "@/components/ui/switch";
import ActionBtn from "@/components/ActionBtn";



const Page = ()=>{

    const [imagesNumber, setImagesNumber] = useState(1)
    const [aspectRatio, setAspectRatio] = useState(config.aspect_ratios[1])
    const [hdr, setHdr] = useState(50)
    const [upscaleIntensity, setUpscaleIntensity] = useState(50)
    const [isNegPrompt, setIsNegPrompt] = useState(false)


    const changeAspectRatio = (aspect)=>{
        switch (aspect){
            case "square":
                setAspectRatio(config.aspect_ratios[0])
                break;
            // case "landscape":
            //     setAspectRatio(config.aspect_ratios[1])
            //     break;
            case "portrait":
                setAspectRatio(config.aspect_ratios[1])
        }
    }
    return (
        <section className="flex flex-col gap-4 items-center w-full">
            <div className="w-full">

                <div className="flex flex-col gap-4 w-full border-b border-neutral-500 p-2">
                    <label className="text-white text-lg tracking-tighter font-medium">Number of images</label>
                    <div className="flex justify-start gap-3 items-center">
                        {config.maxImagesPerUser.map((num)=>(
                            <ImagesNumber key={num} number={num} imagesNumber={imagesNumber} setImagesNumber={setImagesNumber}/>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full border-b border-neutral-500 p-2">
                    <label className="text-white text-lg tracking-tighter font-medium">Aspect Ratio</label>
                    <div className="grid grid-cols-2 grid-flow-row gap-2">
                        {config.aspect_ratios.map((aspect)=>(<AspectRatio aspectToDisplay={aspect.title} changeAspectRatio={changeAspectRatio} selectedAspectRatio={aspectRatio.title} />))}
                        {/* <CustomAspect/> */}
                    </div>
                </div>
                
                <div className="flex flex-col gap-2 w-full border-b p-2 border-neutral-500">
                    <label className="text-white text-lg tracking-tighter font-medium">Upscale Image</label>
                    <ImageUpscale hdr={hdr} setHdr={setHdr} upscaleIntensity={upscaleIntensity} setUpscaleIntensity={setUpscaleIntensity}/>
                </div>
                
                
                <div className="flex flex-col gap-2 p-2">
                    <label htmlFor="prompt" className="text-white text-lg tracking-tighter font-medium">Prompt</label>
                    <textarea rows="5" cols="43" name="prompt" id="prompt" className="text-white bg-black rounded-md focus:outline-pendora-yellow outline-1 p-2"/>
                    <div className="flex w-full justify-between items-center">
                        <label htmlFor="negative prompt" className="text-white text-lg tracking-tighter font-medium">Negative Prompt</label>
                        <Switch id="negative prompt" checked={isNegPrompt} onClick={()=> setIsNegPrompt(prev => !prev)} />
                    </div>
                    <textarea rows="5" cols="43" name="negative prompt" id="negative prompt" className={`text-white ${!isNegPrompt? 'hidden': 'block'} bg-black rounded-md focus:outline-pendora-yellow outline-1 p-2`}/>
                    <ActionBtn className="mt-4" >Generate Image</ActionBtn>
                </div>

            </div>
        </section>
    )
}

export default Page