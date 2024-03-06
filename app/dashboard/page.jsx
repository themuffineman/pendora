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
import {ResizableHandle, ResizablePanel, ResizablePanelGroup,} from "@/components/ui/resizable"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area" 
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import CommunityCard from "@/components/CommunityCard";


export default function dashboard() {

    const [prompt, setPrompt] = useState('')
    const [urls, setUrls] = useState([])

    const createPrediction = async()=>{
        const response = await fetch('/api/create-prediction', {body: JSON.stringify(prompt), method: "POST"})
        const predictionUrls = await response.json()
        console.log("Url Array:", predictionUrls.urls.output)
        setUrls(predictionUrls.urls.output)    
    }

    const updatePrompt = (e)=> {
        setPrompt(e.target.value)  
    }
  
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

            <ResizablePanel defaultSize={45} className=" border-r border-gray-500 relative bg-neutral-950 flex-1 h-full ">
                <ScrollArea className="h-full w-full">
                <div className="flex flex-col gap-4 w-full flex-1 ">

                    <Tabs defaultValue="recent" className="w-full flex flex-col justify-center items-center">
                        <TabsList className="grid grid-cols-2 my-auto bg-neutral-950 w-[100%] mb-4  text-white">
                            <TabsTrigger value="recent" className="bg-neutral-800 p-2">Your Art</TabsTrigger>
                            <TabsTrigger value="community" className="bg-neutral-800 p-2" >Community</TabsTrigger>
                        </TabsList>
                        <TabsContent value="recent" >
                            <div className="h-[50%] grid grid-cols-2 grid-flow-row justify-center place-items-center gap-5 w-full px-2 ">
                                <ProjectCard
                                    src={aston}
                                    prompt={"Hello world"}
                                    selected={true}
                                />
                                <ProjectCard
                                    src={aston}
                                    prompt={"Hello world"}
                                    selected={false}
                                />
                                <ProjectCard
                                    src={aston}
                                    prompt={"Hello world"}
                                    selected={false}
                                />
                                <ProjectCard
                                    src={aston}
                                    prompt={"Hello world"}
                                    selected={false}
                                />

                                <ProjectCard
                                    src={aston}
                                    prompt={"Hello world"}
                                    selected={false}
                                />

                                <ProjectCard
                                    src={aston}
                                    prompt={"Hello world"}
                                    selected={false}
                                />
                                <ProjectCard
                                    src={aston}
                                    prompt={"Hello world"}
                                    selected={false}
                                />
                                <ProjectCard
                                    src={aston}
                                    prompt={"Hello world"}
                                    selected={false}
                                />
                                <ProjectCard
                                    src={aston}
                                    prompt={"Hello world"}
                                    selected={false}
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="community" className="flex flex-col gap-4 items-center">
                    <div className="w-full px-2 relative">
                                <Input type="search" className="pl-10 text-white bg-neutral-950" placeholder="Search for Inspiration"/>
                                <svg className="absolute top-1/2 -translate-y-1/2 left-4 fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                            </div>
                            <div className="h-[50%] grid grid-cols-2 grid-flow-row justify-center place-items-center gap-5 w-full px-2 ">
                                <CommunityCard
                                    src={aston}
                                    prompt={"Hello world"}
                                    selected={true}
                                />
                                <CommunityCard
                                    src={aston}
                                    prompt={"Hello world"}
                                    selected={false}
                                />
                                <CommunityCard
                                    src={aston}
                                    prompt={"Hello world"}
                                    selected={false}
                                />
                                <CommunityCard
                                    src={aston}
                                    prompt={"Hello world"}
                                    selected={false}
                                />

                                <CommunityCard
                                    src={aston}
                                    prompt={"Hello world"}
                                    selected={false}
                                />

                                <CommunityCard
                                    src={aston}
                                    prompt={"Hello world"}
                                    selected={false}
                                />
                                <CommunityCard
                                    src={aston}
                                    prompt={"Hello world"}
                                    selected={false}
                                />
                                <CommunityCard
                                    src={aston}
                                    prompt={"Hello world"}
                                    selected={false}
                                />
                                <CommunityCard
                                    src={aston}
                                    prompt={"Hello world"}
                                    selected={false}
                                />
                            </div>
                        </TabsContent>
                    </Tabs>

                </div>
                </ScrollArea>
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={33} className="flex-1 p-10 h-full flex flex-col gap-4 justify-center items-center relative bg-black bg-dot-white/[0.2] rounded-md">

                    <Carousel className="p-10 w-[90%]">
                        <CarouselContent className="w-full">
                            {urls?.map((url)=>(
                                <CarouselItem className="">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-0">
                                            <img
                                                
                                                src={url}
                                                
                                                className="w-full h-full rounded-md object-cover"
                                            />
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                          
                       
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={33} className="flex-1 h-full relative flex flex-col items-center bg-neutral-950 border-l-gray-500 border-l text-white">
                <ScrollArea className="h-full w-full">
                   
                    <section className="flex flex-col gap-4 items-center w-full">
                        <div className="w-full">
                            <div className="flex flex-col gap-2 w-full border-b border-neutral-500 p-2">
                                <label>Aspect Ratio</label>
                                <span className="grid grid-cols-2 grid-flow-row gap-2">
                                    <div className="p-2 rounded-md text-white text-center bg-neutral-700 cursor-pointer hover:bg-neutral-800 ">Landscape</div>
                                    <div className="p-2 rounded-md text-white text-center bg-neutral-700 cursor-pointer hover:bg-neutral-800 ">Square</div>
                                    <div className="p-2 rounded-md text-white text-center bg-neutral-700 cursor-pointer hover:bg-neutral-800 "> Portrait</div>
                                    <div className="p-2 rounded-md text-white text-center bg-neutral-700 cursor-pointer hover:bg-neutral-800 "> Custom</div>
                                </span>
                            </div>
                            
                            <div className="flex flex-col gap-2 w-full border-b p-2 border-neutral-500">
                                <label>Image Effects</label>
                                <span className="grid grid-cols-2 grid-flow-row gap-2">
                                    <div className="p-2 rounded-md text-white text-center bg-neutral-700 cursor-pointer hover:bg-neutral-800 ">Upscale Image</div>
                                    <div className="p-2 rounded-md text-white text-center bg-neutral-700 cursor-pointer hover:bg-neutral-800 text-nowrap ">Remove Background</div>
                                </span>
                            </div>
                           
                            
                            <div className="flex flex-col gap-2 p-2">
                                <label>Prompt</label>
                                <Textarea onChange={updatePrompt} name="" id="" className="text-black"/>
                                <label>Negative Prompt</label>
                                <Textarea name="" id="" className="text-black"/>
                                <button className="p-2 bg-pendora-yellow text-black rounded-md" onClick={createPrediction}>Generate Image</button>
                            </div>
                        </div>
                    </section>
                </ScrollArea>
            </ResizablePanel>
        </ResizablePanelGroup>
        
    </main>
  )
}