import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './NavItem.module.scss';

const NavItem = ({ to, subItems, subItemsWidth, right, children }) => {
  const { color, fontWeight } = useSelector(state => state.ui.nav.font);
  const { borderColor, backgroundColor } = useSelector(state => state.ui.nav.dropdown);

  return (  
    <div className={styles.wrap}>
      <Link 
        to={to} 
        className={styles.item}
        style={{ color, fontWeight }}
      >
        {children}
      </Link>
      {subItems && <ul 
        className={styles.dropdown}
        style={{ 
          width: subItemsWidth,
          right: right ? 0 : undefined,
          borderColor,
          backgroundColor
        }}
      >
        {subItems}
      </ul>}    
    </div>
  );
}
 
export default NavItem;