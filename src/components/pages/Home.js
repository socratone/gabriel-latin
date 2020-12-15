import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
  return (  
    <div>
      <div className={styles.backImage} style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2016/08/22/18/11/sky-1612521_1280.jpg)`}}></div>
    </div>
  );
}
 
export default Home;