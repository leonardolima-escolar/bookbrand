import styles from './style.module.scss'
import { Heart } from 'lucide-react'

export default function Comment() {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.photo}></div>
      <div className={styles.comment}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas sagittis a augue sit amet auctor. Integer eget gravida nibh,
          vel feugiat nibh. Aenean malesuada, mi non maximus bibendum,
          magna lorem vulputate mauris, at rhoncus risus urna eu nibh.
          In sed tellus tellus. Suspendisse nulla augue, tempor sit amet ex vel,
          lobortis varius sapien. Phasellus in tristique felis. Phasellus blandit augue.
        </div>
        <div className={styles.likes}><Heart style={{ fill: "#D11A1A", stroke: "none", }} size={20} /> gostei (12)</div>
      </div>
    </div>
  )
}
