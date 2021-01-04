import React from 'react';
import styles from './TabItem.module.scss';

const TabItem = ({ onClick, children }) => {
  return (
    <div onClick={onClick} className={styles.wrap}>
      <a className={styles.item}>{children}</a>
    </div>
  );
}

export default TabItem;