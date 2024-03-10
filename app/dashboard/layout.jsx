"use client"
import React, {useState, useEffect, useRef} from "react";
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
import {ResizableHandle, ResizablePanel, ResizablePanelGroup, } from "@/components/ui/resizable"
import {getPanelElement} from "react-resizable-panels"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area" 
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { Textarea } from "@/components/ui/textarea"
import Navigation from "@/components/Navigation";
import ImageCarousel from "@/components/ImageCarousel";
import ActionBtn from "@/components/ActionBtn";


const layout = ({children}) => {

    const urls = [aston, grim, aston, grim, aston, grim]
    const leftPanelRef = useRef()
    const rightPanelRef = useRef()
    console.log(rightPanelRef.current)
    
    
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
        
        <nav className="flex justify-end items-center  border-gray-500 border-b h-[10%] p-2">
            
            
           
            
            <div className="flex gap-2 items-center">
                <Avatar className="bg-black text-white font-semibold uppercase">
                    <AvatarImage src={aston} />
                    <AvatarFallback className="bg-black">PS</AvatarFallback>
                </Avatar>

                <ActionBtn>Sign Out</ActionBtn>
            </div>
            
        </nav>
        

        <ResizablePanelGroup direction="horizontal"  className=" h-[90%] flex justify-between items-center relative overflow-auto">
            <Navigation/>

            <ResizablePanel ref={leftPanelRef} id="left-panel" defaultSize={40} collapsible={true} collapsedSize={0} maxSize={100} minSize={40} className="flex-1 h-full relative flex flex-col items-center bg-neutral-950 border-l-gray-500 border-l text-white">
                <ScrollArea className="h-full w-full">
                    {children}
                </ScrollArea>
            </ResizablePanel>

            <ResizableHandle withHandle/>

            <ResizablePanel ref={rightPanelRef} id="right-panel" defaultSize={50} collapsible={true} collapsedSize={0} maxSize={100} minSize={50} className="flex-1 p-10 h-full flex flex-col gap-4 justify-center items-center relative bg-black bg-dot-white/[0.2] rounded-md">
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