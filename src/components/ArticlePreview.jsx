import ArticleImage from './ArticleImage'
import ArticleDesc from './ArticleDesc'

import styles from './ArticlePreview.module.css'

const ArticlePreview = () => {
  return (
    <div className={styles['article-preview']}>
      
      {<ArticleImage/>}
      {<ArticleDesc/>}
      
    </div>
  )
}

export default ArticlePreview