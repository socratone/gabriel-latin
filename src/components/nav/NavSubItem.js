import React from 'react';
import styles from './NavSubItem.module.scss';

const NavSubItem = ({ children }) => {
  return (  
    <li className={styles.item}>
      {children}
    </li>
  );
}
 
export default NavSubItem;