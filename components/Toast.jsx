import styles from './components.module.css'
const Toast = ({variant, message}) => {
  return (

    <div className={` flex h-max w-max ${styles.toast} fixed rounded-md bottom-0 bg-black items-center justify-center p-4`}>
        <p className='text-white font-bold text-xl tracking-tighter capitlize '>{message}</p>
    </div>
  )
}

export default Toast