import React from 'react';
import styles from './TabItem.module.scss';

const TabItem = ({ onClick, selected, children }) => {
  const setSelectedbackground = () => {
    if (!selected) return {};
    return {
      background: '#0984e3'
    }
  };

  const setSelectedColor = () => {
    if (!selected) return {};
    return {
      color: 'white'
    }
  };

  return (
    <div onClick={onClick} className={styles.wrap} style={setSelectedbackground()}>
      <a className={styles.item} style={setSelectedColor()}>{children}</a>
    </div>
  );
}

export default TabItem;