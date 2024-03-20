'use client'
import { useEffect, useRef, useState } from "react"
import { ImageGenOptions } from '@/app/global-state/ImageGeneration';
import styles from './components.module.css'


const UpscaledImageCard = ({before, after, index}) => {
    
    const afterImg = useRef(null)
    const line = useRef(null)
    const icon = useRef(null)

    const updateSlider = (event)=>{
        afterImg.current.style.clipPath = ` inset(0 0 0 ${event.target.value}%) `
    }
    
  return (
    <div className="">
        <div className="w-full" id={`slide-${index + 1}`}>
            <div className=" w-full aspect-square relative overflow-hidden">
                <img
                    src={before}
                    className="block w-full h-full rounded-md object-cover absolute object-center"
                />
                <img
                    ref={afterImg}
                    src={after}
                    className={`block w-full h-full rounded-md object-cover absolute object-center ${styles.img_after}`}
                />
            </div>
            <input 
            type="range" 
            name="" 
            id="" 
            min={0} 
            max={100} 
            value={50} 
            step={1}
            onInput={updateSlider}
            className={`absolute inset-0 cursor-pointer opacity-0 size-full`}
            aria-label="Percentage of Upscaled phot shown"/>
        </div>
    </div>
  )
}

export default UpscaledImageCard