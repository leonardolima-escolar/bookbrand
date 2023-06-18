import SignIn from '@/components/SignIn'
import Hero from '@/components/Hero'
import styles from './style.module.scss'

export default function Login() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Hero />
      </section>

      <section className={styles.signIn}>
        <SignIn />
      </section>
    </main>
  )
}
