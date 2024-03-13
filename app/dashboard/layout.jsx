import aston from '../../public/hero-images/aston.webp';
import grim from '../../public/hero-images/grim.png';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area" 
import Navigation from "@/components/Navigation";
import ActionBtn from "@/components/ActionBtn";
import CarouselSection from '@/components/CarouselSection';
import Fullscreen from '@/components/Fullscreen';


const layout = ({children}) => {
    const urls = [aston, grim, aston, grim, aston, grim]

    
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
        <div className=" h-[90%] flex justify-between items-center relative overflow-auto">
            <Navigation/>
            <div className="flex-1 h-full relative flex flex-col items-center bg-neutral-950 border-l-gray-500 border-l text-white">
                <Fullscreen />
                <ScrollArea className="h-full w-full">
                    {children}
                </ScrollArea>
            </div>
            <CarouselSection/>
        </div>
    </main>
  )
}

export default layout