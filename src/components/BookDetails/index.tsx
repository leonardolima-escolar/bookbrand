import BookSummary from '@/components/BookSummary'
import styles from './style.module.scss'
import BookRating from '@/components/BookRating'
import { Book } from '@/types/book'

export default function BookDetails({ book }: { book: Book }) {
  return (
    <section className={styles.section}>
      <BookSummary book={book} />
      <BookRating book={book} />
    </section>
  )
}
