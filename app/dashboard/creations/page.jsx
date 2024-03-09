import ProjectCard from '../../../components/ProjectCard'
// import Input from '../../../components/ui/Input'
import img1 from '../../../public/hero-images/img1.webp'
import img2 from '../../../public/hero-images/img2.webp'
import img3 from '../../../public/hero-images/img3.webp'
import styles from '../../../components/components.module.css'

const Page = () => {
  return (
    <section className='flex flex-col gap-2 items-center p-2 overflow-auto w-full h-full relative '>
        <div className='w-full flex items-center justify-between sticky top-0 left-0 bg-neutral-950 p-4  '>
          <p className='text-white font-semibold text-2xl tracking-tighter'>Your Artworks</p>
          <svg className="fill-white bg-none rounded-sm p-1 hover:fill-white hover:bg-black inline size-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z"/></svg>
        </div>
        <div className={`${styles.feedgrid} w-full`}>
            <ProjectCard src={img1}/>
            <ProjectCard src={img1}/>
            <ProjectCard src={img1}/>
            <ProjectCard src={img1}/>
            <ProjectCard src={img2}/>
            <ProjectCard src={img2}/>
            <ProjectCard src={img2}/>
            <ProjectCard src={img2}/>
            <ProjectCard src={img3}/>
            <ProjectCard src={img3}/>
            <ProjectCard src={img3}/>
            <ProjectCard src={img3}/>
        </div>
    </section>
  )
}

export default Page