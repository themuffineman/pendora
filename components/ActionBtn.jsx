
const ActionBtn = ({children, className}) => {
  return (
    <button className={`${className} p-2 bg-pendora-yellow text-black rounded-md font-semibold hover:bg-black hover:text-white hover:ring-pendora-yellow hover:ring-2`}> {children} </button>
  )
}

export default ActionBtn