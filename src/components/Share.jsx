/** Styling imports */
import React, {useState, useEffect} from 'react'
import styles from './Share.module.css'
import ShareButton from '/../images/icon-share.svg'
import FacebookButton from '/../images/icon-facebook.svg'
import twitter from '/../images/icon-twitter.svg'
import pinterest from '/../images/icon-pinterest.svg'
import Michelle from '/../images/avatar-michelle.jpg'
import drawers from '/../images/drawers.jpg'

/*
<img src={FacebookButton}  alt="facebook" />  
      <img src={twitter} /> 
      <img src={pinterest} /> 
*/




const Share = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 376);
  const shouldShowButton = (isMobile && !visible) || !isMobile;
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 376);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className={styles['share']}>

      {shouldShowButton &&
      (<div>
        <div className={styles['profile']}>
            <img src={Michelle} className={styles['avatar-img']}/>
            <div className={styles['profile-desc']}>
              <h2>Michelle Appleton</h2>
              <p>28 Jun 2020</p>
            </div>
        </div>
    
        <button className={styles['circle']} onClick={() => setVisible(!visible)}>
          <img src={ShareButton} className={styles['share-img']} />
          {visible && !isMobile &&  (
            <div className={styles["tooltip"]}>
              <span className={styles["label"]}>SHARE</span>
              <img src={FacebookButton} className={styles["icon"]} />
              <img src={twitter} className={styles["icon"]} />
              <img src={pinterest} className={styles["icon"]} />
              <div className={styles["tooltip-arrow"]} />
            </div>
          )}
        </button>
      </div>)}

        {isMobile && visible && (<div className={styles["mobile-tooltip"]}>
          <span className={styles["label"]}>SHARE</span>
          <img src={FacebookButton} className={styles["icon"]} />
          <img src={twitter} className={styles["icon"]} />
          <img src={pinterest} className={styles["icon"]} />
          <button className={styles['circle']} onClick={() => setVisible(!visible)}>
            <img className={styles['share-img']} src={ShareButton} />
          </button> 
        </div>)}
    </div>

  )
}

export default Share