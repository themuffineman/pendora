import CommunityCard from '../../../components/CommunityCard'
// import Input from '../../../components/ui/Input'
import img1 from '../../../public/hero-images/img1.webp'

const Page = () => {
  return (
    <section className='flex flex-col gap-2 items-center p-2 overflow-auto w-full h-full '>
        <div className='m-auto w-max h-max p-2'>
            <input type='search' className="w-10 p-2 bg-white text-black "/>
        </div>
        <div className='grid grid-2 gap-2 grid-flow-row justify-center content-center'>
            <CommunityCard src={img1} prompt={'hello world'}/>
            <CommunityCard src={img1} prompt={'hello world'}/>
            <CommunityCard src={img1} prompt={'hello world'}/>
            <CommunityCard src={img1} prompt={'hello world'}/>
            <CommunityCard src={img1} prompt={'hello world'}/>
            <CommunityCard src={img1} prompt={'hello world'}/>
            <CommunityCard src={img1} prompt={'hello world'}/>
            <CommunityCard src={img1} prompt={'hello world'}/>
            <CommunityCard src={img1} prompt={'hello world'}/>
            <CommunityCard src={img1} prompt={'hello world'}/>
            <CommunityCard src={img1} prompt={'hello world'}/>
            <CommunityCard src={img1} prompt={'hello world'}/>
        </div>
    </section>
  )
}

export default Page