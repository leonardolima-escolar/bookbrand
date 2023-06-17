import Button from '@/components/Button'
import { SearchIcon } from 'lucide-react'
import styles from './style.module.scss'

export default function SearchBar() {
  return (
    <form action="" className={styles.form}>
      <input type="text" placeholder="Pesquisar" />
      <Button>
        <SearchIcon width={30} height={30} color="white" />
      </Button>
    </form>
  )
}
