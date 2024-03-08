"use client"
import { Textarea } from "@/components/ui/textarea"
import {useState} from 'react'
import config from '../../config';
import ImagesNumber from "@/components/ImagesNumber";
import AspectRatio from "@/components/AspectRatio";
import CustomAspect from "@/components/CustomAspect";
import ImageUpscale from "@/components/ImageUpscale";



const Page = ()=>{
    const [imagesNumber, setImagesNumber] = useState(1)
    const [aspectRatio, setAspectRatio] = useState(config.aspect_ratios[2])


    const changeAspectRatio = (aspect)=>{
        switch (aspect){
            case "square":
                setAspectRatio(config.aspect_ratios[0])
                break;
            case "landscape":
                setAspectRatio(config.aspect_ratios[1])
                break;
            case "portrait":
                setAspectRatio(config.aspect_ratios[2])
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
                    <ImageUpscale/>
                </div>
                
                
                <div className="flex flex-col gap-2 p-2">
                    <label>Prompt</label>
                    <Textarea name="" id="" className="text-black"/>
                    <label>Negative Prompt</label>
                    <Textarea name="" id="" className="text-black"/>
                    <button className="p-2 bg-pendora-yellow text-black rounded-md" >Generate Image</button>
                </div>

            </div>
        </section>
    )
}

export default Page