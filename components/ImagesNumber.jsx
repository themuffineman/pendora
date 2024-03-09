
const ImagesNumber = ({number, imagesNumber, setImagesNumber}) => {
  return (
    <div className={`${imagesNumber === number && 'ring-2 ring-pendora-yellow'}  p-2 size-12 font-medium rounded-md text-white text-center bg-neutral-700 cursor-pointer hover:bg-neutral-800`} onClick={()=>{setImagesNumber(number)}}>
        {number}
    </div>
  )
}

export default ImagesNumber