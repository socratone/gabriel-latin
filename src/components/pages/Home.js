import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFont } from '../../store/nav';
import HomeImage from '../Home/HomeImage';
import styles from './Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFont({ color: 'white', fontWeight: '500'  }));
    return () => dispatch(setFont({ color: '#707070'}));
  }, []);

  return (  
    <main>
      <HomeImage />
    </main>
  );
}
 
export default Home;