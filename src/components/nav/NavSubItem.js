import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './NavSubItem.module.scss';

const NavSubItem = ({ to, children }) => {
  const color = useSelector(state => state.ui.nav.dropdown.color);

  return (  
    <Link to={to} className={styles.item} style={{ color }}>
      {children}
    </Link>
  );
}
 
export default NavSubItem;