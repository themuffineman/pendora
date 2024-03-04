"use client"
import Input from './ui/input'
import React, { useState, useRef, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue,} from "./ui/select"
import { ScrollArea, ScrollBar } from "./ui/scroll-area" 
import {ResizableHandle, ResizablePanel, ResizablePanelGroup,} from "./ui/resizable"
import ProjectCard from "@/components/ProjectCard";
import aston from '../public/hero-images/aston.webp';
import CommunityCard from './CommunityCard';


const LeftDash = () => {

    const parentRef = useRef(null);
    const [cols, setCols] = useState(0);

    useEffect(() => {
      const observer = new ResizeObserver(entries => {
        for (const entry of entries) {
          const width = entry.contentRect.width;
          console.log(width)
          const columns = calculateColumns(width);
          setCols(columns)
        }
      });
  
      observer.observe(parentRef.current);
  
      return () => {
        observer.disconnect();
      };
    }, []);

    const calculateColumns = (width) => {
        let cols = 1;
        if (width < 470) {
          cols = 2;
        }
        
      };
  

  return (
    
    <ResizablePanel  defaultSize={15} className=" border-r border-gray-500 relative bg-neutral-950 flex-1 h-full ">
        <ScrollArea className="h-full w-full">
            <div className="flex flex-col gap-4 w-full flex-1 ">

                <Tabs defaultValue="recent" className="w-full flex flex-col justify-center items-center">
                    <TabsList className="grid grid-cols-2 my-auto bg-neutral-950 w-[100%] mb-4  text-white">
                        <TabsTrigger value="recent" className="bg-neutral-800 p-2">Your Art</TabsTrigger>
                        <TabsTrigger value="community" className="bg-neutral-800 p-2" >Community</TabsTrigger>
                    </TabsList>
                    <TabsContent value="recent" >
                        <div ref={parentRef} className={`h-[50%] grid grid-cols-${cols} grid-flow-row justify-center place-items-center gap-5 w-full px-2`}>
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
                        <div  className="h-[50%] grid grid-cols-2 grid-flow-row justify-center place-items-center gap-5 w-full px-2 ">
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
  )
}

export default LeftDash