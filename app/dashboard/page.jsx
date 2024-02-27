
import Image from "next/image";
import aston from '../../public/hero-images/aston.webp';
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue,} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import ProjectCard from "@/components/ProjectCard";
import {ResizableHandle, ResizablePanel, ResizablePanelGroup,} from "@/components/ui/resizable"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

  


export default function dashboard() {
  
  return (
    <main className="w-full h-screen flex flex-col bg-neutral-950  relative">

        

        <nav className="flex justify-between items-center  border-gray-500 border-b h-[10%] p-2">
            
            <p className="text-white">Projects/Water Ways</p>
            
            <Tabs defaultValue="image" className="w-[50%] flex justify-center items-center">
                <TabsList className="grid grid-cols-2 cent bg-neutral-950 w-[300px] mb-4  text-white">
                <TabsTrigger value="image" className="bg-neutral-950" >Image</TabsTrigger>
                <TabsTrigger value="video" className="bg-neutral-950">Video</TabsTrigger>
                </TabsList>
            </Tabs>
            
            <div className="flex gap-2 items-center">

                <Select className="flex justify-center items-center">
                    <SelectTrigger  className="w-40 border-none bg-neutral-950 text-white">
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

            <ResizablePanel defaultSize={25} className=" border-r border-gray-500 relative bg-neutral-950 flex-1 h-full ">
                <ScrollArea className="h-full w-full">
                <div className="flex flex-col gap-4 w-full flex-1 ">

                    <h3 className="text-2xl font-normal text-gray-300 center w-full h-max p-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">Recent Projects</h3>

                    {/* <div className="grid grid-flow-row grid-cols-1 gap-4 w-full flex-1 overflow-auto">
                        

                        <ProjectCard
                            src={aston}
                            prompt="lorem ipsum lorem ipsum lorem ipsum"
                        />

                        <ProjectCard
                            src={aston}
                            prompt="lorem ipsum lorem ipsum lorem ipsum"
                            selected={true}

                        />

                        <ProjectCard
                            src={aston}
                            prompt="lorem ipsum lorem ipsum lorem ipsum"
                        />

                        
                    </div> */}
                    <ScrollArea className="h-[50%] grid grid-col-1 grid-flow-row w-full">
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
                    </ScrollArea>
                </div>
                </ScrollArea>
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={50} className="flex-1 p-10 h-full flex flex-col justify-center items-center relative bg-black bg-dot-white/[0.2] rounded-md">
                    <div className="max-w-[40rem] w-[20rem] max-h-[40rem]  h-[40rem] relative">
                        <Image
                            layout="fill"
                            src={aston}
                            objectFit="cover"
                            className="w-full h-full rounded-md"
                        />
                    </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={25} className="flex-1 p-4 relative flex flex-col items-center bg-neutral-950 border-l-gray-500 border-l text-white">
                
                    <section className="flex gap-4 items-center w-full ">
                        <div className="flex gap-2 items-center">
                            <p className="bg-gray-500 text-md">Credits Left:</p>
                            <p className="bg-gray-500 text-md">400/500</p>
                        </div>
                        <div className="flex gap-2 items center">
                            <button className="rounded-md p-2 bg-green-300">Upgrade</button>
                            <div className=" rounded-full size-10 text-sm border p-2">P</div>
                        </div>
                    </section>
                    <section className="flex flex-col gap-4 items-center w-full">
                        <div className="self-start ">Edit Image</div>
                        <div>
                            <div className="flex flex-col gap-2 w-full">
                                <label>Aspect Ratio</label>
                                <span className="flex gap-2">
                                <input type="text" name="" id="" className="w-10 p-1" />
                                <input type="text" name="" id="" className="w-10 p-1" />
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label>Remove Background</label>
                                <span className="flex gap-2">
                                <input type="checkbox" name="" id="" className="size-10 border" />
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label>Upscale Image</label>
                                <span className="flex gap-2">
                                <input type="checkbox" name="" id="" className="size-10 border" />
                                </span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label>Prompt</label>
                                <textarea name="" id="" cols="10" rows="5"></textarea>
                                <label>Negative Prompt</label>
                                <textarea name="" id="" cols="10" rows="5"></textarea>
                                <button className="p-2 bg-green-300 text-white rounded-md">Generate Image</button>
                            </div>
                        </div>
                    </section>
            </ResizablePanel>
        </ResizablePanelGroup>
        
    </main>
  )
}