import React from 'react';
import TabItem from './TabItem';
import styles from './ContentsNav.module.scss';

const ContentsNav = ({ items, index, changeIndex }) => {
  return (  
    <nav className={styles.nav}>
      {items.map((item, i) => 
        <TabItem key={i} onClick={() => changeIndex(i)} selected={i === index}>
          {item.tabTitle}
        </TabItem>
      )}
    </nav>
  );
}
 
export default ContentsNav;