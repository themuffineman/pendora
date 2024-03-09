"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import styles from "./components.module.css"


const CommunityCard = ({src, prompt,selected}) => {
    const [copied, setCopied] = useState(false)
    const [favourite, setFavourite] = useState(false)

    const copyText = async()=>{
        try {
            await navigator.clipboard.writeText(prompt);
            setCopied(true)
            setTimeout(()=> {setCopied(false)}, 3000)
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

  return (
    <div className={`${styles.comunitycard} flex items-center relative justify-between w-[15rem] h-auto cursor-pointer `}>
      <Image
      src={src}
      className="w-full h-full object-cover"
      />
      <div className='bottom-0 rounded-md rounded-t-none w-full h-max flex justify-between items-center p-4  absolute bg-transprent backdrop-blur-md'>
        <p className='font-semibold text-white inline'>{prompt}...</p>
        {copied? <svg className='inline fill-green-300 bg-transparent' onClick={copyText} stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg> : <svg  onClick={copyText}  className="inline fill-white cursor-pointer"xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>}
      </div>
      <svg className={` ionicon stroke-white absolute top-1 right-1 inline cursor-pointer size-[20px] ${favourite? 'fill-white': 'fill-none'}`} onClick={()=> setFavourite(prev=> !prev)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"   stroke-linecap="round" stroke-linejoin="round" stroke-width="42"/></svg>
    </div>
  )
}

export default CommunityCard