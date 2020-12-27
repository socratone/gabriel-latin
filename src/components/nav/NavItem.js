import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavItem.module.scss';

const NavItem = ({ to, subItems, subItemsWidth, right, children }) => {
  return (  
    <div className={styles.wrap}>
      <Link 
        to={to} 
        className={styles.item}
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