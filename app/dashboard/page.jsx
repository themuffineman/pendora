import ImagesNumber from "@/components/ImagesNumber";
import AspectRatio from "@/components/AspectRatio";
import ImageUpscale from "@/components/ImageUpscale";
import PromptArea from '@/components/PromptArea';



const Page = ()=>{

    // const imageFetchBody = {
    //     quantity: imagesQuantity,
    //     width: aspectRatio.width,
    //     height: aspectRatio.height,
    //     prompt: prompt
    // }

    // const generateImage = async ()=>{
    //     try {
    //         const images = await fetch('/api/create-prediction', {method: "POST", body: JSON.stringify(imageFetchBody)})
    //     } catch (error) {
    //         console.log(error)
            
    //     }
    // }
    return (
        <section className="flex flex-col gap-4 items-center w-full">
            <div className="w-full">

                <div className="flex flex-col gap-4 w-full border-b border-neutral-500 p-2">
                    <label className="text-white text-lg tracking-tighter font-medium">Number of images</label>
                    <div className="flex justify-start gap-3 items-center">
                        <ImagesNumber/>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full border-b border-neutral-500 p-2">
                    <label className="text-white text-lg tracking-tighter font-medium">Aspect Ratio</label>
                    <div className="grid grid-cols-2 grid-flow-row gap-2">
                        <AspectRatio/>
                    </div>
                </div>
                
                <div className="flex flex-col gap-2 w-full border-b p-2 border-neutral-500">
                    <label className="text-white text-lg tracking-tighter font-medium">Upscale Image</label>
                    <ImageUpscale/>
                </div>
                
                
                <div className="flex flex-col gap-2 p-2">
                    <label htmlFor="prompt" className="text-white text-lg tracking-tighter font-medium">Prompt</label>
                    <PromptArea/>
                </div>

            </div>
        </section>
    )
}

export default Page