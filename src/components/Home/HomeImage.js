import React from 'react';
import styles from './HomeImage.module.scss';

const HomeImage = () => {
  return (  
    <section className={styles.imageWrap}>
      <div 
        className={styles.image} 
        style={{ 
          backgroundImage: `url(https://gabriel-latin.s3.ap-northeast-2.amazonaws.com/assets/home/home.jpg)`
        }} 
      />
      <div className={styles.imageColor}>
        <div className={styles.firstLine}>
          <p className={styles.text}><strong>G</strong>abriel</p>
        </div>
        <div className={styles.secondLine}>
          <div className={styles.institutum}>
            <p className={styles.text}><strong>I</strong>nstitutum</p>
          </div>
          <div className={styles.latinitatis}>
            <p className={styles.text}><strong>L</strong>atinitatis</p>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default HomeImage;