import React, { useEffect, useRef } from 'react'

const Dialog = ({setDialog}) => {

    const dialog = useRef(null)

    useEffect(()=>{
        document.addEventListener('click', isClicked)
        return(
            ()=> {document.removeEventListener('click', isClicked)}
        )
    })

    const isClicked = (e)=>{
        if (e.target !== dialog.current) {
            setDialog(false)
        }
    }

  return (
    <div  className='fixed top-0 w-screen h-screen backdrop-blur-lg opacity-20 bg-black'>
        <div ref={dialog} className='p-10 w-max h-max border rounded-md flex flex-col gap-4 items-start bg-black'>
            <div className='text-4xl tracking-tighter text-white font-bold'>Are you sure you want to delete</div>
            <div className='flex justify-between items-center gap-1'>
                <button onClick={()=> setDialog(false)} className='p-2 bg-white text-black font-medium text-md rounded-md w-max h-max text-center'>Cancel</button>
                <button className='p-2 bg-red-600 text-white font-medium text-md rounded-md w-max h-max text-center'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Dialog