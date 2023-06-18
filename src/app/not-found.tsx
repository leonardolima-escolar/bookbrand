import Link from 'next/link'
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.notFoundHeading}>Não Encontrado</h2>
      <p className={styles.notFoundText}>Não foi possível encontrar o livro solicitado</p>
      <p className={styles.linkText}>
        Veja <Link href="/">todos os livros</Link>
      </p>
    </div>
  )
}
