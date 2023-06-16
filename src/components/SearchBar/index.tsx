import Button from '@/components/Button'
import { Input, SearchIcon } from "lucide-react"
import styles from './style.module.scss'

export default function SearchBar() {
  return (
    <form action="" className={styles.form}>
      <input type="text" />
      <Button>
        <SearchIcon color="white" />
      </Button>
    </form>
  )
}
