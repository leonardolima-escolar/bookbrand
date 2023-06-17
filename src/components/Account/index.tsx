import styles from './style.module.scss'
import { InstagramIcon } from 'lucide-react'

export default function Header() {
  return (
    <div className={styles.account}>
      <div className={styles.photo}></div>
      <div>
        <div className={styles.name}>Leonardo Lima</div>
        <div className={styles.container}>
          <InstagramIcon color="#F58529" />
          <a href="" className={styles.username}>@leonardolmai</a>
        </div>
      </div>
    </div>
  )
}
