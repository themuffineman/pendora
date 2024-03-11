import ProjectCard from '../../../components/ProjectCard'
import img1 from '../../../public/hero-images/img1.webp'
import img2 from '../../../public/hero-images/img2.webp'
import img3 from '../../../public/hero-images/img3.webp'
import styles from '../../../components/components.module.css'

const Page = () => {
  return (
    <section className='flex flex-col gap-2 items-center p-2 overflow-auto w-full h-full relative '>
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