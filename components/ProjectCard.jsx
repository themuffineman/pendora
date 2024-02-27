import React from 'react'
import Image from 'next/image'


const ProjectCard = ({src, prompt,selected}) => {
  return (
    <div className={`flex items-center justify-between w-full h-max p-1 ${selected? 'border-l-[5px] border-l-green-400 bg-neutral-700': 'bg-neutral-900'} `}>
        <div className=" pr-2 size-36 flex-1 flex items-center">
            <Image
            src={src}
            object-fit="cover"
            className="rounded-md max-w-40 max-h-40 "
            />
        </div>
        <div className="flex-1 flex justify-start items-center p-3">
            <h4 className="text-white">{prompt}</h4>
        </div>
    </div>
  )
}

export default ProjectCard