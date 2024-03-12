"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const Fullscreen = () => {
    const path = usePathname()
  return (
    <div className={`w-full items-center justify-between sticky top-0 left-0 bg-black p-4 ${path == '/dashboard'? 'hidden' : 'flex'}`}>
        <p className='text-white font-semibold text-2xl tracking-tighter'>{path === '/dashboard'? null : path === '/dashboard/creations'? 'Your Artworks' : path === '/dashboard/community'? 'Artworks from Community' : path === '/dashboard/earnings' && 'Earnings' }</p>
        <svg className="fill-white bg-none rounded-sm p-1 hover:fill-white hover:bg-black inline size-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z"/></svg>
    </div>
  )
}

export default Fullscreen