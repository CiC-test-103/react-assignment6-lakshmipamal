import styles from './ArticleImage.module.css'
import drawers from '/../images/drawers.jpg'

const ArticleImage = () => {
  return (
    <div className={styles['article-image']}>
      <img src={drawers} />
    </div>
  )
}

export default ArticleImage