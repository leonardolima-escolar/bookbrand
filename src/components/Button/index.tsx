import { ReactNode } from 'react'
import styles from './style.module.scss'

interface ButtonProps {
  children?: ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button className={`${styles.button} ${className}`}>
      {children}
    </button>
  )
}
