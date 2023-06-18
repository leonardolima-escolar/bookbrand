import styles from './style.module.scss'
import Image from 'next/image'
import Logo from 'public/assets/logo.png'

export default function Hero() {
  return (
    <>
      <h1 className={styles.title}>Compartilhe suas dicas de leitura com os seus amigos</h1>
      <Image className={styles.logo} src={Logo} alt="bookbrand" width={298} height={289} />
    </>
  )
}
