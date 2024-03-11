import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "./ui/carousel"
import ImageCarousel from "./ImageCarousel";
import { isFullscreen } from "@/utils/globalVar";


const CarouselSection = ({urls}) => {
  return (
    <div className={`flex-1 ${isFullscreen? 'hidden' : 'flex'} p-10 h-full flex-col gap-4 justify-center items-center relative bg-black bg-dot-white/[0.2] rounded-md`}>
        <Carousel className="p-10 w-[90%]">
            <CarouselContent className="w-full">
                {urls?.map((url)=>(
                    <ImageCarousel key={url} src={url}/>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>  
  )
}

export default CarouselSection
