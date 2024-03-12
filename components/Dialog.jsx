import styles from './components.module.css'


const Dialog = ({setDialog}) => {

  return (
    <div className={` flex h-max w-max ${styles.dialog} fixed rounded-md bottom-0 bg-black items-center justify-center p-4`}>
        <div className='p-5 w-max h-max rounded-md flex flex-col gap-4 items-start bg-black'>
            <div className='text-xl tracking-tighter text-white font-bold'>Are you sure you want to delete</div>
            <div className='flex justify-between items-center gap-1 w-full'>
                <button onClick={()=> setDialog(false)} className='p-2 bg-white text-black font-medium text-md rounded-md w-max h-max text-center'>Cancel</button>
                <button className='p-2 bg-red-600 text-white font-medium text-md rounded-md w-max h-max text-center'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Dialog