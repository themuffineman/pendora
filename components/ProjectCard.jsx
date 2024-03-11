import Image from 'next/image'
import styles from "./components.module.css"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"



const ProjectCard = ({src}) => {
  return (
    <div className={`flex items-center relative justify-between w-[15rem] h-auto cursor-pointer`}>
      <Image
      src={src}
      className="w-full h-full object-cover hover:zoom-in-50"
      />
      <DropdownMenu className="bg-neutral-950" >
        <DropdownMenuTrigger className='absolute top-1 right-1 bg-none'>
          <svg className='fill-white size-7 hover:bg-black hover:fill-white hover:rounded-sm p-1 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-black w-max">
          <div className="w-full bg-black flex flex-col gap-2">
            <div className="hover:bg-neutral-950 text-white font-medium flex justify-between gap-4 w-full items-center p-2 rounded-md cursor-pointer">
              <p>Add to Community</p>
              <svg className='fill-white size-5' xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" ><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
            </div>
            <div className="hover:bg-red-600 text-white font-medium flex justify-between w-full items-center p-2 rounded-md cursor-pointer">
              <p>Delete</p>
              <svg className='fill-white size-5' xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" ><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default ProjectCard