import React from 'react'
import Image from 'next/image'


const ProjectCard = ({src, prompt,selected}) => {
  return (
    <div className={`flex items-center justify-between w-full h-max p-1 ${selected && 'border-r-[5px] border-green-400'} bg-neutral-900`}>
        <div className=" size-40 flex-1 flex items-center">
            <Image
            src={src}

            object-fit="cover"
            className="rounded-md "
            />
        </div>
        <div className="flex-1 flex justify-center items-center">
            <h4 className="text-white">{prompt}</h4>
        </div>
    </div>
  )
}

export default ProjectCard