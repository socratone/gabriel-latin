import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setSubItems, toggleMenuButton } from '../../store/reducers/nav';
import ArrowIcon from '../icon/ArrowIcon';
import styles from './RightNavItem.module.scss';

const RightNavItem = ({ to, subItems, children }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleItemClick = () => {
    history.push(to);
    dispatch(toggleMenuButton());
    dispatch(setSubItems({ subItems: null }));
  };

  const handleArrowClick = () => {
    dispatch(setSubItems({ subItems }));
  };

  return (  
    <div className={styles.wrap}>
      <a className={styles.item} onClick={handleItemClick}>
        {children}
      </a>
      {subItems && <div className={styles.arrowWrap} onClick={handleArrowClick}>
        <a className={styles.arrow}>
          <ArrowIcon size="10" color="#b0b0b0" />
        </a>
      </div>}
    </div>
  );
}
 
export default RightNavItem;