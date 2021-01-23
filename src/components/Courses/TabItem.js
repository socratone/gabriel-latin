import React from 'react';
import styles from './TabItem.module.scss';

const TabItem = ({ onClick, selected, children, over }) => {
  const setSelectedbackground = () => {
    if (selected) return '#0984e3';
  };

  const setSelectedColor = () => {
    if (selected) return 'white';
  };

  const setBorderRadius = () => {
    if (over) return '0.25rem';
  };

  return (
    <div 
      onClick={onClick} 
      className={styles.wrap} 
      style={{ 
        background: setSelectedbackground(),
        borderRadius: setBorderRadius()
      }}>
        <a 
          className={styles.item} 
          style={{ color: setSelectedColor()}}>
            {children}
        </a>
    </div>
  );
}

export default TabItem;