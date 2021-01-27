import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ArrowIcon from '../icon/ArrowIcon';
import styles from './NavItem.module.scss';

const Dropdown = ({ dropdown, right }) => {
  const setDropdownDirection = () => {
    if (right) return { right: '-15px' };
    else return { left: '-15px' };
  };

  return (
    <ul 
      className={styles.dropdown}
      style={setDropdownDirection()}>
        {dropdown}
    </ul>
  );
};

const NavItem = ({ to, dropdown, right, children }) => {
  const [isDropdown, setDropdown] = useState(false);
  const history = useHistory();

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  const handleMouseDown = () => {
    history.push(to);
    setTimeout(setDropdown(false), 500);
  };

  return (  
    <div 
      className={styles.wrap} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}>
        <p className={styles.item}>
          {children}
          {dropdown && ' '}
          {dropdown && <ArrowIcon size="10" color="#b0b0b0" />}
        </p>
        {dropdown && isDropdown && <Dropdown dropdown={dropdown} right={right} />}    
    </div>
  );
}
 
export default NavItem;