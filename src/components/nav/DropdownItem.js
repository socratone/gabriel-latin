import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './DropdownItem.module.scss';

const DropdownItem = ({ to, children }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(to);
  };

  return (  
    <li className={styles.wrap} onClick={handleClick}>
      <p to={to} className={styles.item}>
        {children}
      </p>
    </li>
  );
}
 
export default DropdownItem;