"use client"
import { ImageGenOptions } from "@/app/global-state/ImageGeneration";
import ImageCarousel from "./ImageCarousel";
import { useContext } from "react";
import CardSkeleton from "./CardSkeleton";
import styles from './components.module.css'


const CarouselSection = () => {
  const {imageUrls, loadingImages, imagesQuantity} = useContext(ImageGenOptions)
  const cardArray = new Array(imagesQuantity).fill(1)
  return (
    <div  className={` flex-1 flex p-10 h-full flex-col gap-4 justify-center items-center relative bg-black bg-dot-white/[0.2] rounded-md`}>
      <div className="w-[90%]">
          <div className={styles.slider_wrapper}>
            <div className={`${styles.slider} rounded-sm shadow-md`}>
            { !loadingImages && imageUrls? 
              imageUrls.map((url, index)=>(<ImageCarousel key={url} src={url} index={index}/>)) 
              :
              loadingImages && cardArray.map((_,index)=>(<CardSkeleton key={index}/>))              
            }
            </div>
            <div className={styles.slider_nav}>
              {imageUrls.map((_, index) => (<a href={`#slide-${index + 1}`}></a>))}
            </div>
          </div>
      </div> 
    </div>
    )
  }
  
  
export default CarouselSection
