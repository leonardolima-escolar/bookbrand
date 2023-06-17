import { ReactNode } from 'react'
import styles from './style.module.scss'

interface ButtonProps {
  children?: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles.searchButton}`}>
      {children}
    </button>
  )
}
