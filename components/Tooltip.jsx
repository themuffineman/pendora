import React from 'react'
import styles from './components.module.css'

const Tooltip = ({message}) => {
  return (
    <div className={`${styles.tooltip} absolute -top-2 right-1/2 rounded-md w-max p-1 bg-black text-white text-sm font-medium`}>
        {message}
    </div>
  )
}

export default Tooltip