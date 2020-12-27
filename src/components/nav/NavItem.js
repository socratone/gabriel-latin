import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './NavItem.module.scss';

const NavItem = ({ to, home, subItems, subItemsWidth, right, children }) => {
  const color = useSelector(state => state.ui.nav.color);

  return (  
    <div className={styles.wrap}>
      <Link 
        to={to} 
        className={styles.item}
        style={{ color }}
      >
        {children}
      </Link>
      {subItems && <ul 
        className={styles.dropdown}
        style={{ 
          width: subItemsWidth,
          right: right ? 0 : undefined
        }}
      >
        {subItems}
      </ul>}    
    </div>
  );
}
 
export default NavItem;