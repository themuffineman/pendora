'use client'
import { useEffect, useRef, useState } from "react"
import { CarouselItem } from "./ui/carousel"
import { ImageGenOptions } from '@/app/global-state/ImageGeneration';
import styles from './components.module.css'
import img1 from '../public/hero-images/img1.webp'


const UpscaledImageCard = () => {
    
    const afterImg = useRef(null)

    const updateSlider = (event)=>{
        console.log('these are the styles:', afterImg.current.style)
        console.log('these are the current:', afterImg.current)
        afterImg.current.style.clipPath = ` inset(0 0 0 ${event.target.value}%)`

    }
    
  return (
    <CarouselItem className="">
        <div className="w-full">
            <div className=" w-full aspect-square relative overflow-hidden">
                <img
                    src={'https://cdn.midjourney.com/88c96488-9fd6-48fa-b80c-5b081c111f75/0_2.webp'}
                    className="block w-full h-full rounded-md object-cover absolute"
                />
                <img
                    ref={afterImg}
                    src={'https://cdn.midjourney.com/e07c74f5-64ec-4d07-9c5c-129881065b80/0_1.webp'}
                    className={`block w-full h-full rounded-md object-cover absolute ${styles.img_after}`}
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
            className={`absolute inset-0 cursor-pointer opacity-0 size-full ${styles.slider}`}
            aria-label="Percentage of Upscaled phot shown"/>
            {/* <div className={`slider-line absolute inset-0 w-[2px] pointer-events-none h-full bg-white z-10 left-1/2 -translate-x-1/2`}></div>
            <div className={`slider-button absolute bg-white fill-black rounded-full p-1 grid place-items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  pointer-events-none z-50 shadow-lg`} aria-hidden="true">
                <svg className="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM96,120H35.31l18.35-18.34A8,8,0,0,0,42.34,90.34l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L35.31,136H96a8,8,0,0,0,0-16Zm149.66,2.34-32-32a8,8,0,0,0-11.32,11.32L220.69,120H160a8,8,0,0,0,0,16h60.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,122.34Z"></path></svg>
            </div> */}
        </div>
    </CarouselItem>
  )
}

export default UpscaledImageCard