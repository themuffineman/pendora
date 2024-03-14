"use client"
import { ImageGenOptions } from "@/app/global-state/ImageGeneration";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "./ui/carousel"
import ImageCarousel from "./ImageCarousel";
import { useContext } from "react";
import { Skeleton } from "./ui/skeleton";
import CardSkeleton from "./CardSkeleton";


const CarouselSection = () => {
  const {imageUrls, loadingImages} = useContext(ImageGenOptions)
  return (
    <div  className={` flex-1 flex p-10 h-full flex-col gap-4 justify-center items-center relative bg-black bg-dot-white/[0.2] rounded-md`}>
        <Carousel className="p-10 w-[90%]">
            <CarouselContent className="w-full">
              { (!loadingImages && imageUrls)? 
                imageUrls.map((url)=>(<ImageCarousel key={url} src={url}/>)) 
                : 
                loadingImages? (<CardSkeleton/>) 
                :
                null
              }
              {/* <CardSkeleton/> */}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>  
  )
}

export default CarouselSection
