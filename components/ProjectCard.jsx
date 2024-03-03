import React from 'react'
import Image from 'next/image'
import styles from "./components.module.css"


const ProjectCard = ({src, prompt,selected}) => {
  return (
    <div className={`flex items-center relative justify-between w-[15rem] h-[25rem] rounded-md hover:border-white hover:border`}>
      <Image
      src={src}
      object-fit="cover"
      className="w-full h-full object-cover rounded-md"
      />
      <svg className='absolute top-1 right-1 bg-white rounded-md shadow-md text-black active:shadow-none ' xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
    </div>
  )
}

export default ProjectCard