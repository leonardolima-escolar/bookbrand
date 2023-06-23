import styles from './style.module.scss'
import { Heart } from 'lucide-react'
import { api } from '@/utils/api'

export default async function Comment({ commentId }: { commentId: number }) {
  const { data } = await api.get(`/comments/${commentId}`)

  return (
    <div className={styles.commentContainer}>
      <div className={styles.photo}></div>
      <div className={styles.comment}>
        <div>
          {data.text}
        </div>
        <div className={styles.likes}><Heart style={{ fill: "#D11A1A", stroke: "none", }} size={20} /> gostei ({data.likes})</div>
      </div>
    </div>
  )
}
