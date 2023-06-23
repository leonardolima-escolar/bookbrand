import styles from './style.module.scss'
import { Book } from '@/types/book'
import Image from 'next/image'

export default function Book({ book }: { book: Book }) {
  return (
    <div className={styles.book}>
      <Image src={`${book.image}`} width={148} height={226} alt='' />
    </div>
  )
}
