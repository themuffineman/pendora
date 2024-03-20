'use client'
import { useEffect, useRef, useState } from "react"
import { CarouselItem } from "./ui/carousel"
import { ImageGenOptions } from '@/app/global-state/ImageGeneration';
import styles from './components.module.css'
import img1 from '../public/hero-images/img1.webp'


const UpscaledImageCard = ({before, after}) => {
    
    const afterImg = useRef(null)
    const line = useRef(null)
    const icon = useRef(null)

    const updateSlider = (event)=>{
        afterImg.current.style.clipPath = ` inset(0 0 0 ${event.target.value}%) `
    }
    
  return (
    <CarouselItem className="">
        <div className="w-full">
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
            {/* <div ref={line} className={`${styles.slider_line}`}></div>
            <div ref={icon} className={`${styles.slider_button}`} aria-hidden="true">
                <svg className="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM96,120H35.31l18.35-18.34A8,8,0,0,0,42.34,90.34l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L35.31,136H96a8,8,0,0,0,0-16Zm149.66,2.34-32-32a8,8,0,0,0-11.32,11.32L220.69,120H160a8,8,0,0,0,0,16h60.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,122.34Z"></path></svg>
            </div> */}
        </div>
    </CarouselItem>
  )
}

export default UpscaledImageCard