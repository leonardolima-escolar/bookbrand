import SearchBar from '@/components/SearchBar'
import Account from '@/components/Account'
import Login from '@/components/Login'
import Image from 'next/image'
import Logo from 'public/assets/logo.png'
import styles from './style.module.scss'

export default function Header() {
  const isLoggedIn = true;

  return (
    <header className={styles.header}>
      <Image src={Logo} alt="bookbrand" width={95} height={92} />
      <SearchBar />
      {isLoggedIn ? (
        <Account />
      ) : (
        <Login />
      )}
    </header >
  )
}
