import styles from './ArticleDesc.module.css'
import Share from './Share'

const ArticleDesc = () => {
  return (
    <div className={styles['article-desc']}>
      <h1>Shift the overall look and feel by adding these wonderful 
      touches to furniture in your home</h1>

      <p>Ever been in a room and felt like something was missing? Perhaps 
      it felt slightly bare and uninviting. I’ve got some simple tips 
      to help you make any room feel complete.
      </p>

      
      {<Share/>}
      
    </div>
  )
}

export default ArticleDesc