const CustomAspect = () => {
    return (
      <div className={`capitalize p-2 flex items-center justify-center w-full font-medium rounded-md text-white text-center bg-neutral-700 cursor-pointer hover:bg-neutral-800`}>
          <div className="flex flex-col gap-1 items-center">
            <input type="number" className="w-16 h-8 appearance-none focus:outline-white outline-1 bg-black text-white rounded-md p-2"/>
            {/* <p className="text-gray-300 text-xs capitalize text-center">width</p> */}
          </div>
          <svg className="fill-white size-4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" ><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          <div className="flex flex-col gap-1 items-center">
            <input type="number" className="w-16 h-8 focus:outline-white outline-1 bg-black text-white rounded-md p-2"/>
            {/* <p className="text-gray-300 text-xs capitalize text-center">height</p> */}
          </div>
      </div>
    )
  }
  
  export default CustomAspect