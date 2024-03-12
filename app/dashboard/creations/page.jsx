"use client"
import ProjectCard from '../../../components/ProjectCard'
import img1 from '../../../public/hero-images/img1.webp'
import img2 from '../../../public/hero-images/img2.webp'
import img3 from '../../../public/hero-images/img3.webp'
import styles from '../../../components/components.module.css'
import Toast from '@/components/Toast'
import { useState } from 'react'
import Dialog from '@/components/Dialog'

const Page = () => {
  const [isAdded, setIsAdded] = useState(false)
  const [dialog, setDialog] = useState(false)

  const showToast = ()=>{
    setIsAdded(true)
    setTimeout(()=>{setIsAdded(false)}, 2000)
  }
  
  return (
    <section className='flex flex-col gap-2 items-center p-2 overflow-auto w-full h-full relative '>
        <div className={`${styles.feedgrid} w-full`}>
            <ProjectCard src={img1} showToast={showToast}/>
            <ProjectCard src={img1} showToast={showToast}/>
            <ProjectCard src={img1} showToast={showToast}/>
            <ProjectCard src={img1} showToast={showToast}/>
            <ProjectCard src={img2} showToast={showToast}/>
            <ProjectCard src={img2} showToast={showToast}/>
            <ProjectCard src={img2} showToast={showToast}/>
            <ProjectCard src={img2} showToast={showToast}/>
            <ProjectCard src={img3} showToast={showToast}/>
            <ProjectCard src={img3} showToast={showToast}/>
            <ProjectCard src={img3} showToast={showToast}/>
            <ProjectCard src={img3} showToast={showToast}/>
        </div>
        {
          isAdded? <Toast variant={'community'} message="Added to community"/> : null
        }
        {
          dialog? <Dialog setDialog={setDialog}/> : null
        }
    </section>
  )
}

export default Page