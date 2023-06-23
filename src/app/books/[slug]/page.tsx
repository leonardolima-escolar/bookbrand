import BookDetails from "@/components/BookDetails"
import styles from './style.module.scss'
import { api } from "@/utils/api"
import { Book as BookType } from '@/types/book'

export default async function Book({ params }: { params: { slug: string } }) {
  const response = await api.get(`/books/${params.slug}`)

  const book: BookType = response.data

  return (
    <main className={styles.main}>
      <BookDetails book={book} />
    </main>
  )
}

export async function getStaticPaths() {
  const { data } = await api.get('/books')

  const paths = data.map((book: BookType) => ({
    params: { slug: book.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
