import Button from '@/components/Button'
import styles from './style.module.scss'
import Link from 'next/link'

export default function SignIn() {
  return (
    <>
      <form action="" className={styles.form}>
        <input type="text" placeholder="E-mail" id="email" name="email" autoComplete="off" />
        <input type="password" placeholder="Senha" id="password" name="password" autoComplete="off" />
        <Button className={styles.loginButton}>
          Entrar
        </Button>
        <Link href={""} className={styles.forgotYourPassword}>Esqueceu a senha?</Link>
        <Button className={styles.signUpButton}>
          Criar nova conta
        </Button>
      </form>
    </>
  )
}
