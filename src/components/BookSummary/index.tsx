import Button from '@/components/Button'
import styles from './style.module.scss'
import { Star } from 'lucide-react'
import { Book } from '@/types/book'
import Image from 'next/image'

export default function BookSummary({ book }: { book: Book }) {
  return (
    <section className={styles.section}>
      <div className={styles.bookCover}>
        <Image src={`${book.image}`} width={200} height={296} alt='' />
      </div>
      <span className={styles.title}>{book.title}</span>
      <span className={styles.description}>{book.abstract}</span>
      <span className={styles.author}>{book.author}</span>
      <div className={styles.stars}>
        <Star style={{ fill: "#F8C615", stroke: "none", }} size={32} />
        <Star style={{ fill: "#F8C615", stroke: "none", }} size={32} />
        <Star style={{ fill: "#F8C615", stroke: "none", }} size={32} />
        <Star style={{ fill: "#F8C615", stroke: "none", }} size={32} />
        <Star style={{ fill: "#D9D9D9", stroke: "none", }} size={32} />
      </div>
      <Button className={styles.addToLibraryButton}>
        Adicionar à biblioteca
      </Button>
    </section>
  )
}
