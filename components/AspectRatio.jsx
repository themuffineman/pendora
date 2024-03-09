
const AspectRatio = ({aspectToDisplay, selectedAspectRatio, changeAspectRatio}) => {
  return (
    <div className={`${selectedAspectRatio === aspectToDisplay && 'ring-2 ring-pendora-yellow'}  capitalize p-2 w-full font-medium rounded-md text-white text-center bg-neutral-700 cursor-pointer hover:bg-neutral-800`} onClick={() => changeAspectRatio(aspectToDisplay)}>
        {aspectToDisplay}
    </div>
  )
}

export default AspectRatio