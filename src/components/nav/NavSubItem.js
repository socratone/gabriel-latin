import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavSubItem.module.scss';

const NavSubItem = ({ to, children }) => {
  return (  
    <Link to={to} className={styles.item}>
      {children}
    </Link>
  );
}
 
export default NavSubItem;