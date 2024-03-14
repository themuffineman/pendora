import { Card, CardContent } from "./ui/card"
import { CarouselItem } from "./ui/carousel"

const CardSkeleton = () => {
  return (
    <CarouselItem className="">
        <Card>
            <CardContent className="flex aspect-square items-center justify-center p-0 relative">
                <div
                    className="w-full h-full rounded-md object-cover bg-black animate-pulse"
                />
            </CardContent>
        </Card>
    </CarouselItem>
  )
}

export default CardSkeleton