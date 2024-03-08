
const ImagesNumber = ({number, imagesNumber, setImagesNumber}) => {
  return (
    <div className={`${imagesNumber === number && 'border-2 border-pendora-yellow'}p-2 rounded-md text-white text-center bg-neutral-700 cursor-pointer hover:bg-neutral-800`} onClick={()=>{setImagesNumber(number)}}>
        {number}
    </div>
  )
}

export default ImagesNumber