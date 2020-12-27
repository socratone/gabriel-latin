import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNavItem, setDropdown } from '../../store/nav';
import HomeImage from '../Home/HomeImage';
import styles from './Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavItem({ color: 'white', fontWeight: '500' }));
    dispatch(setDropdown({ 
      color: 'white', 
      borderColor: 'white', 
      backgroundColor: 'transparent' 
    }));
    return () => { 
      dispatch(setNavItem({ color: '#707070' }));
      dispatch(setDropdown({ 
        color: 'black', 
        borderColor: 'gainsboro', 
        backgroundColor: 'white' 
      }));
    }
  }, []);

  return (  
    <main>
      <HomeImage />
    </main>
  );
}
 
export default Home;