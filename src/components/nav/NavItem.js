import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFontColor } from '../../store/nav';
import styles from './NavItem.module.scss';

const NavItem = ({ to, home, subItems, children }) => {
  const [isDropdown, setDropdown] = useState(false);
  const color = useSelector(state => state.ui.nav.color);
  const dispatch = useDispatch();

  const converFontColor = () => {
    if (home) dispatch(setFontColor({ color: 'white' }));
    else dispatch(setFontColor({ color: 'black' }));
  };

  const showDropdown = () => {
    setDropdown(true);
  }; 

  return (  
    <div className={styles.wrap}>
      <Link 
        to={to} 
        onClick={converFontColor} 
        onMouseEnter={showDropdown} 
        style={{ color }}
      >
        {children}
      </Link>
      {isDropdown && subItems && <ul className={styles.dropdown}>
        {subItems}
      </ul>}
      
    </div>
  );
}
 
export default NavItem;