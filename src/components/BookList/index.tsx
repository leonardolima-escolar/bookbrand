import Book from '@/components/Book'
import styles from './style.module.scss'
import Link from 'next/link'
import { api } from '@/utils/api'
import { Book as BookType } from '@/types/book'

export default async function BookList() {
  const response = await api.get('/books')

  const books: BookType[] = response.data

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Encontre as melhores indicações de livros</h1>
      <section className={styles.books}>
        {books.map((book) => {
          return <Link href={`/books/${book.id}`} key={book.id}><Book book={book} /></Link>
        })}
      </section>
    </section>
  )
}
