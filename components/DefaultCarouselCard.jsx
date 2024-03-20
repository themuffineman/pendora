import React from 'react'
import { CarouselItem } from './ui/carousel'
import styles from './components.module.css'
import Toast from './Toast'

const DefaultCarouselCard = ({src, alt, createUpscale, upscaleError}) => {
    console.log('default has mounted')
  return (
    <CarouselItem className="relative">
        <div>
            <div className={`flex aspect-square items-center justify-center p-0 relative ${styles.gen_image}`}>
                <Image
                    src={src}
                    fill={true}
                    className="w-full h-full rounded-md object-cover"
                    alt={alt}
                    // placeholder="blur"
                />
                <span className="absolute top-1 right-2 flex gap-4 ">
                  <span onClick={createUpscale} className=" text-white text-sm bg-black rounded-sm w-max p-1 cursor-pointer hover:bg-neutral-700">
                    Upscale
                  </span>
                  <a href={src} download='image.png'>
                    <svg className=" fill-white bg-black rounded-sm size-7 cursor-pointer hover:bg-neutral-700" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" ><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
                  </a>
                </span>
            </div>
        </div>
        {upscaleError && <Toast message={'Failed to Upscale Image. Try Again'} variant='error'/>}
    </CarouselItem>
  )
}

export default DefaultCarouselCard