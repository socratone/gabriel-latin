import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFontColor } from '../../store/nav';
import HomeImage from '../Home/HomeImage';
import styles from './Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFontColor({ color: 'white' }));
    return () => dispatch(setFontColor({ color: '#707070' }));
  }, []);

  return (  
    <main>
      <HomeImage />
    </main>
  );
}
 
export default Home;