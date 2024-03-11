import CommunityCard from '../../../components/CommunityCard'
import img1 from '../../../public/hero-images/img1.webp'
import img2 from '../../../public/hero-images/img2.webp'
import img3 from '../../../public/hero-images/img3.webp'
import styles from '../../../components/components.module.css'


const Page = () => {
  return (
    <section className='flex flex-col gap-2 items-center p-2 overflow-auto w-full h-full '>
      
        <div className={`${styles.feedgrid} w-full`}>
            <CommunityCard src={img1} prompt={'hello world'}/>
            <CommunityCard src={img1} prompt={'hello world'}/>
            <CommunityCard src={img1} prompt={'hello world'}/>
            <CommunityCard src={img1} prompt={'hello world'}/>
            <CommunityCard src={img2} prompt={'hello world'}/>
            <CommunityCard src={img2} prompt={'hello world'}/>
            <CommunityCard src={img2} prompt={'hello world'}/>
            <CommunityCard src={img2} prompt={'hello world'}/>
            <CommunityCard src={img3} prompt={'hello world'}/>
            <CommunityCard src={img3} prompt={'hello world'}/>
            <CommunityCard src={img3} prompt={'hello world'}/>
            <CommunityCard src={img3} prompt={'hello world'}/>
        </div>
    </section>
  )
}

export default Page