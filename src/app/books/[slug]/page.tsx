import BookDetails from "@/components/BookDetails"
import styles from './style.module.scss'

export default function Book({ params }: { params: { slug: string } }) {
  return (
    <main className={styles.main}>
      <BookDetails slug={params.slug} />
    </main>
  )
}

export async function getStaticPaths() {
  const books = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

  const paths = books.map((book) => ({
    params: { slug: book.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
