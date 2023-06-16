import { ReactNode } from "react"
import styles from './style.module.scss'

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}
