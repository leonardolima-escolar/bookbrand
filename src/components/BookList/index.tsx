import Book from '@/components/Book'
import styles from './style.module.scss'

const books = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

export default function BookList() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Encontre as melhores indicações de livros</h1>
      <section className={styles.books}>
        {books.map((item) => {
          return <Book key={item} />
        })}
      </section>
    </section>
  )
}
