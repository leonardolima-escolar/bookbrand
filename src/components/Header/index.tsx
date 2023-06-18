import SearchBar from '@/components/SearchBar'
import Account from '@/components/Account'
import Login from '@/components/Login'
import Image from 'next/image'
import Logo from 'public/assets/logo.png'
import styles from './style.module.scss'
import Link from 'next/link'

export default function Header() {
  const isLoggedIn = false;

  return (
    <header className={styles.header}>
      <Link href="/"><Image src={Logo} alt="bookbrand" width={95} height={92} /></Link>
      <SearchBar />
      {isLoggedIn ? (
        <Account />
      ) : (
        <Login />
      )}
    </header >
  )
}
