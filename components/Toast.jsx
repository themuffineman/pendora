import styles from './components.module.css'
const Toast = ({variant = 'alert', message}) => {
  return (

    <div className={` flex h-max w-max ${styles.toast} fixed rounded-md  bottom-0 ${variant === 'error'? 'bg-red-500 ': variant === 'alert' && 'bg-black'} items-center justify-center  p-4 `}>
      <p className='text-white font-bold text-sm tracking-tighter capitlize '>{message}</p>
    </div>
  )
}

export default Toast