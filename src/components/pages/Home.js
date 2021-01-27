import React from 'react';
import HomeImage from '../Home/HomeImage';
import PageFrame from '../common/PageFrame';
import styles from './Home.module.scss';

const Home = () => {
  return (  
    <main>
      <HomeImage />
      <PageFrame>
        <p>안녕하세요!</p>
      </PageFrame>
    </main>
  );
}
 
export default Home;