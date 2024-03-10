import { Card, CardContent } from "./ui/card"
import { CarouselItem } from "./ui/carousel"
import Image from "next/image"


const ImageCarousel = ({src}) => {
  return (
    <CarouselItem className="">
        <Card>
            <CardContent className="flex aspect-square items-center justify-center p-0">
                <Image
                    src={src}
                    className="w-full h-full rounded-md object-cover"
                />
            </CardContent>
        </Card>
    </CarouselItem>
  )
}

export default ImageCarousel