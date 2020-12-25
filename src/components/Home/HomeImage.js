import React from 'react';
import styles from './HomeImage.module.scss';

const HomeImage = () => {
  return (  
    <section className={styles.imageWrap}>
      <div className={styles.image} style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2017/09/07/16/50/acropolis-2725918_1280.jpg)`}}></div>
      <div className={styles.imageColor}></div>
    </section>
  );
}
 
export default HomeImage;