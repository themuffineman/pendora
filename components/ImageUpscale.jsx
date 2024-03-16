import UpscaleIntensityInputs from "./UpscaleIntensityInputs";
import UpscaleHdrInputs from "./UpscaleHdrInputs";


const ImageUpscale = () => {

  return (
    <div className='w-full p-2 flex flex-col gap-1'>
        <div className='flex flex-col gap-1 w-full'>
            <label className="text-white text-md tracking-tighter font-medium">Intensity</label>
            <div className='flex justify-between items-center w-full'>
                <UpscaleIntensityInputs/>
            </div>
        </div>
        <div className='flex flex-col gap-1 w-full'>
            <label className="text-white text-md tracking-tighter font-medium">HDR Improvement</label>
            <UpscaleHdrInputs/>
        </div>
    </div>
  )
}

export default ImageUpscale