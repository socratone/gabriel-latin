import React from 'react';
import { useDispatch } from 'react-redux';
import { setFontColor } from '../../store/nav';
import styles from './Nav.module.scss';
import NavItem from './NavItem';

const Nav = () => {
  const dispatch = useDispatch();

  const converFontColor = color => {
    dispatch(setFontColor({ color }));
  }

  return (  
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavItem to="/" onClick={() => converFontColor('white')}>Home</NavItem>
        <NavItem to="/llpsi" onClick={() => converFontColor('black')}>LLPSI</NavItem>
        <NavItem to="/courses/regular" onClick={() => converFontColor('black')}>Regular Courses</NavItem>
        <NavItem to="/courses/private" onClick={() => converFontColor('black')}>Private Courses</NavItem>
        <NavItem to="/exams" onClick={() => converFontColor('black')}>Exams</NavItem>
        <NavItem to="/fnq" onClick={() => converFontColor('black')}>F&Q</NavItem>
        <NavItem to="/more" onClick={() => converFontColor('black')}>More</NavItem>
      </nav>
    </header>
  );
}
 
export default Nav;