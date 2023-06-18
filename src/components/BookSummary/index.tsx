import Button from '@/components/Button'
import styles from './style.module.scss'
import { Star } from 'lucide-react'

interface BookSummaryProps {
  slug: string
}

export default function BookSummary({ slug }: BookSummaryProps) {
  return (
    <section className={styles.section}>
      <div className={styles.bookCover}></div>
      <span className={styles.title}>Título do livro {slug}</span>
      <span className={styles.description}>Lorem ipsum dolor sit amet</span>
      <span className={styles.author}>Fulano de Tal</span>
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
