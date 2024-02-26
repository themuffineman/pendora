"use client"
import Image from "next/image";
import aston from '../../public/hero-images/aston.webp';
import { useEffect, useState } from "react";


export default function dashboard() {

    // const [userData, setUserData] = useState({})
    // const [selectedImage, setSelectedImage] = useState({})
    // useEffect(()=>{
    //     const initialMount = async()=> {
    //         try{
    //             const fetchedUserData = await fetch('/api/user-data', {method: 'POST', body: 'user info goes here', headers:{"Content-Type":'application-json', sessionId:'sessionId goes here'}})
    //             setUserData(fetchedUserData)

    //         }catch(error){
    //             console.log(error)
    //         }
    //     }
    //     initialMount()
    // },[])

    // const generateImage = async()=>{
    //     try {
    //         const image = await fetch('/api/generate-image', {method:"POST", body:"prompt and other stuff", headers:{"Content-Type":'application-json', sessionId:'sessionId goes here'}})
    //     } catch (error) {
            
    //     }
    // }

    


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
        <div className="left max-w-[50%] w-[50%] h-full pt-10 flex flex-col justify-center items-center relative bg-green-600">
        <div className="max-w-[40rem] w-[40rem] max-h-[90%] border border-white h-[90%] relative">
            <Image
                layout="fill"
                src={aston}
                objectFit="cover"
                className="w-full h-full "
            />node -v
        </div>
        </div>
        <div className="left w-[25%] h-full p-4 relative flex flex-col items-center bg-blue-500 overflow-y-scroll">
            <section className="flex gap-4 items-center w-full ">
                <div className="flex gap-2 items-center">
                    <p className="bg-gray-500 text-md">Credits Left:</p>
                    <p className="bg-gray-500 text-md">400/500</p>
                </div>
                <div className="flex gap-2 items center">
                    <button className="rounded-md p-2 bg-green-300">Upgrade</button>
                    <div className=" rounded-full size-10 text-sm border p-2">P</div>
                </div>
            </section>
            <section className="flex flex-col gap-4 items-center w-full">
                <div className="self-start ">Edit Image</div>
                <div>
                    <div className="flex flex-col gap-2 w-full">
                        <label>Aspect Ratio</label>
                        <span className="flex gap-2">
                        <input type="text" name="" id="" className="w-10 p-1" />
                        <input type="text" name="" id="" className="w-10 p-1" />
                        </span>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label>Remove Background</label>
                        <span className="flex gap-2">
                        <input type="checkbox" name="" id="" className="size-10 border" />
                        </span>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label>Upscale Image</label>
                        <span className="flex gap-2">
                        <input type="checkbox" name="" id="" className="size-10 border" />
                        </span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Prompt</label>
                        <textarea name="" id="" cols="10" rows="5"></textarea>
                        <label>Negative Prompt</label>
                        <textarea name="" id="" cols="10" rows="5"></textarea>
                        <button className="p-2 bg-green-300 text-white rounded-md">Generate Image</button>
                    </div>
                </div>
            </section>
        </div>
        
    </main>
  )
}