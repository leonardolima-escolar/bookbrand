import styles from './style.module.scss'
import Link from 'next/link'

export default function Login() {
  return (
    <div className={styles.login}>
      <Link href="/login">Login</Link>
    </div>
  )
}
