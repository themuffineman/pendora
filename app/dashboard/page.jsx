import Image from "next/image";
import aston from '../../public/hero-images/aston.webp';


export default function dashboard() {
  return (
    <main className="w-screen h-screen flex items-center justify-start bg-neutral-800 ">
        <div className="left w-[25%] px-4 h-full pt-10 relative bg-neutral-800">
            <button className="w-full flex justify-center items-center border-2 p-2 hover:bg-neutral-700 rounded-md border-white h-max text-white">New Canvas +</button>
            <div className="flex flex-col gap-4 w-full">
                <h3 className="text-md font-normal text-gray-300 center w-full p-2">Generations</h3>
                <div className="grid-container grid grid-flow-row grid-cols-1 gap-4 w-full">
                    <div className="flex items-center justify-between w-full h-max active:border-r-[5px] bg-neutral-900 active:border-green-400 rounded-md">
                        <div className="p-2 size-20 flex-1 flex items-center">
                            <Image
                            src={aston}

                            object-fit="cover"
                            className="rounded-md max-w-20 max-h-20"
                            />
                        </div>
                        <div className="flex-1 mx-auto">
                            <h4 className="text-white">An astronouat riding a rainbow</h4>
                        </div>
                    </div>

                    <div className="flex items-center justify-between w-full h-max active:border-r-[5px] bg-neutral-900 active:border-green-400 rounded-md">
                        <div className="p-2 size-20 flex-1 flex items-center">
                            <Image
                            src={aston}

                            object-fit="cover"
                            className="rounded-md max-w-20 max-h-20"
                            />
                        </div>
                        <div className="flex-1 mx-auto">
                            <h4 className="text-white">An astronouat riding a rainbow</h4>
                        </div>
                    </div>

                    <div className="flex items-center justify-between w-full h-max active:border-r-[5px] bg-neutral-900 active:border-green-400 rounded-md">
                        <div className="p-2 size-20 flex-1 flex items-center">
                            <Image
                            src={aston}

                            object-fit="cover"
                            className="rounded-md max-w-20 max-h-20"
                            />
                        </div>
                        <div className="flex-1 mx-auto">
                            <h4 className="text-white">An astronouat riding a rainbow</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="left w-[50%] h-full pt-10 flex flex-col justify-center items-center relative bg-green-600">
            {/* <button className="p-2 text-white w-max self-end bg-green-300 rounded-md">Download</button> */}
            <div className="max-w-[40rem] w-[30rem] border border-white h-[80%] flex flex-col">
            </div>
            <div className="flex flex-col gap-2">
                <input type="text"/>
                <button className="p-2 bg-green-300 text-white rounded-md">Generate Image</button>
            </div>
        </div>
        <div className="left w-[25%] h-full pt-10 relative bg-blue-500"></div>
        
    </main>
  )
}