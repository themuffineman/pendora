// import React, {useState, useEffect, useRef} from "react";
import Image from "next/image";
import aston from '../../public/hero-images/aston.webp';
import grim from '../../public/hero-images/grim.png';
import { Input } from "@/components/ui/input"
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue,} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import ProjectCard from "@/components/ProjectCard";
import {ResizableHandle, ResizablePanel, ResizablePanelGroup,} from "@/components/ui/resizable"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area" 
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { Textarea } from "@/components/ui/textarea"
import Navigation from "@/components/Navigation";
import ImageCarousel from "@/components/ImageCarousel";


const layout = ({children}) => {

    const urls = [aston, grim, aston, grim, aston, grim]

    // const [prompt, setPrompt] = useState('')
    // const [urls, setUrls] = useState([])

    // const createPrediction = async()=>{
    //     const response = await fetch('/api/create-prediction', {body: JSON.stringify(prompt), method: "POST"})
    //     const predictionUrls = await response.json()
    //     console.log("Url Array:", predictionUrls.urls.output)
    //     setUrls(predictionUrls.urls.output)    
    // }

    // const updatePrompt = (e)=> {
    //     setPrompt(e.target.value)  
    // }

    // const setAspectRatio = (aspect) =>{

    // }
  
  return (
    <main className="w-full h-screen flex flex-col bg-neutral-950  relative">
        
        <nav className="flex justify-between items-center  border-gray-500 border-b h-[10%] p-2">
            
            <Button className="p-2 px-4 font-medium bg-pendora-yellow text-black rounded-md hover:bg-yellow-300">New Canvas</Button>
            
            <Tabs defaultValue="image" className="w-[50%] flex justify-center items-center">
                <TabsList className="grid grid-cols-2 my-auto bg-neutral-950 w-[300px] mb-4  text-white">
                <TabsTrigger value="image" className="bg-neutral-800" >Image</TabsTrigger>
                <TabsTrigger value="video" className="bg-neutral-800">Video</TabsTrigger>
                </TabsList>
            </Tabs>
            
            <div className="flex gap-2 items-center">

                <Select className="flex justify-center items-center ">
                    <SelectTrigger  className="w-40 border-none bg-neutral-800 text-white">
                        <SelectValue placeholder="Export" />
                    </SelectTrigger>
                    <SelectContent className="text-white bg-neutral-950">
                        <SelectGroup className=" ">
                        <SelectLabel className=" text-white">Fruits</SelectLabel>
                        <SelectItem value="apple" className="hover:bg-neutral-800 text-white">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Avatar>
                    <AvatarImage src={aston} />
                    <AvatarFallback>PE</AvatarFallback>
                </Avatar>

                
            </div>
            
        </nav>
        

        <ResizablePanelGroup direction="horizontal"  className=" h-[90%] flex justify-between items-center relative overflow-auto">
            <Navigation/>

            <ResizablePanel defaultSize={40} className="flex-1 h-full relative flex flex-col items-center bg-neutral-950 border-l-gray-500 border-l text-white">
                <ScrollArea className="h-full w-full">
                    {children}
                </ScrollArea>
                </ResizablePanel>

            <ResizableHandle withHandle/>

            <ResizablePanel defaultSize={50} className="flex-1 p-10 h-full flex flex-col gap-4 justify-center items-center relative bg-black bg-dot-white/[0.2] rounded-md">

                    <Carousel className="p-10 w-[90%]">
                        <CarouselContent className="w-full">
                            {urls?.map((url)=>(
                                <ImageCarousel src={url}/>
                            ))}
                        </CarouselContent>
        
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
            </ResizablePanel>

           

            
        </ResizablePanelGroup>
        
    </main>
  )
}

export default layout