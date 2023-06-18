import Comment from '@/components/Comment'
import styles from './style.module.scss'

interface BookRatingProps {
  slug: string
}

export default function BookDetails({ slug }: BookRatingProps) {
  return (
    <section className={styles.section}>
      <section className={styles.ratingContainer}>
        <h1 className={styles.title}>Título do livro {slug}</h1>
        <div className={styles.rating}>
          <div className={styles.score}>
            4.5
          </div>
          <span className={styles.total}>93 avaliações</span>
        </div>
        <div className={styles.ratingInformations}>
          <span>
            Leonardo Lima
          </span>
          <span>17 Jun 23</span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas sagittis a augue sit amet auctor.
          Integer eget gravida nibh, vel feugiat nibh.
          Aenean malesuada, mi non maximus bibendum, magna lorem vulputate mauris,
          at rhoncus risus urna eu nibh. In sed tellus tellus. Suspendisse nulla augue,
          tempor sit amet ex vel, lobortis varius sapien. Phasellus in tristique felis.
          Phasellus blandit augue.</p>
      </section>
      <section className={styles.commentsContainer}>
        <h2 className={styles.title}>Comentários</h2>

        <div className={styles.comments}>
          <Comment />
          <Comment />
        </div>
      </section>
    </section>
  )
}
