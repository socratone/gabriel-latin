import React from 'react';
import { Link } from 'react-router-dom';
import ArrowIcon from '../icon/ArrowIcon';
import styles from './NavItem.module.scss';

const NavItem = ({ to, subItems, subItemsWidth, right, children }) => {
  return (  
    <div className={styles.wrap}>
      <Link 
        to={to} 
        className={styles.item}
      >
        {children}
        {subItems && ' '}
        {subItems && <ArrowIcon size="10" color="#b0b0b0" />}
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