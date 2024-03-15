"use client"
import { useContext } from 'react';
import config from '../config';
import { ImageGenOptions } from '@/app/global-state/ImageGeneration';


const AspectRatio = () => {
  const {aspectRatio, setAspectRatio} = useContext(ImageGenOptions)

  const changeAspectRatio = (aspect)=>{
    switch (aspect){
        case "square":
            setAspectRatio(config.aspect_ratios[0])
            break;
        case "portrait":
            setAspectRatio(config.aspect_ratios[1])
    }
  }
  return (

    <div className="grid grid-cols-2 grid-flow-row gap-2">
      {config.aspect_ratios.map((aspect, index)=>(
        <div key={index} className={`${aspectRatio.title === aspect.title && 'ring-2 ring-pendora-yellow'}  capitalize p-2 w-full font-medium rounded-md text-white text-center bg-neutral-700 cursor-pointer hover:bg-neutral-800`} onClick={() => changeAspectRatio(aspect.title)}>
           {aspect.title}
        </div>
      ))}
    </div>
   

    // <AspectRatio aspectToDisplay={aspect.title} changeAspectRatio={changeAspectRatio} selectedAspectRatio={aspectRatio.title} />
  )
}

export default AspectRatio