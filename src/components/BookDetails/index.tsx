import BookSummary from '@/components/BookSummary'
import styles from './style.module.scss'
import BookRating from '@/components/BookRating'

interface BookDetailsProps {
  slug: string
}

export default function BookDetails({ slug }: BookDetailsProps) {
  return (
    <section className={styles.section}>
      <BookSummary slug={slug} />
      <BookRating slug={slug} />
    </section>
  )
}
