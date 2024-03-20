'use client'
import { useEffect, useRef, useState } from "react"
import { CarouselItem } from "./ui/carousel"
import { ImageGenOptions } from '@/app/global-state/ImageGeneration';
import styles from './components.module.css'


const UpscaledImageCard = ({before, after}) => {
    
    const afterImg = useRef(null)
    const line = useRef(null)
    const icon = useRef(null)
    console.log('I have mounted!!!')

    const updateSlider = (event)=>{
        afterImg.current.style.clipPath = ` inset(0 0 0 ${event.target.value}%) `
    }
    
  return (
    <CarouselItem className="">
        <div className="w-full">
            <div className=" w-full aspect-square relative overflow-hidden">
                <img
                    src='http://localhost:3000/_next/image?url=https%3A%2F%2Freplicate.delivery%2Fpbxt%2FRj01JBVhZU4YLZmLpkDj8uSe3jxp5if1iUxFltVfnwU4NIElA%2Fout-0.png&w=1920&q=75'
                    className="block w-full h-full rounded-md object-cover absolute object-center"
                />
                <img
                    ref='http://localhost:3000/_next/image?url=https%3A%2F%2Freplicate.delivery%2Fpbxt%2FRj01JBVhZU4YLZmLpkDj8uSe3jxp5if1iUxFltVfnwU4NIElA%2Fout-0.png&w=1920&q=75'
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
    </CarouselItem>
  )
}

export default UpscaledImageCard