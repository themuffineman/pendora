"use client"
import { Card, CardContent } from "./ui/card"
import { CarouselItem } from "./ui/carousel"
import Image from "next/image"


const ImageCarousel = ({src}) => {

  return (
    <CarouselItem className="">
        <Card>
            <CardContent className="flex aspect-square items-center justify-center p-0 relative">
                <img
                    src={src}
                    className="w-full h-full rounded-md object-cover"
                />
                <a className="absolute top-1 right-2">
                  <svg className=" fill-white bg-black rounded-sm size-7 cursor-pointer hover:bg-neutral-700" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" ><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
                </a>
            </CardContent>
        </Card>
    </CarouselItem>
  )
}

export default ImageCarousel