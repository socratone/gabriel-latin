import React from 'react';
import TabItem from './TabItem';
import styles from './ContentsNav.module.scss';

const ContentsNav = ({ items, index, changeIndex, nav }) => {
  if (nav === 'private') return (
    <>
      <nav className={styles.overNav}>
        <TabItem onClick={() => changeIndex(0)} selected={0 === index}>
          {items[0].tabTitle}
        </TabItem>
        <TabItem onClick={() => changeIndex(1)} selected={1 === index}>
          {items[1].tabTitle}
        </TabItem>
        <TabItem onClick={() => changeIndex(2)} selected={2 === index}>
          {items[2].tabTitle}
        </TabItem>
      </nav>
      <nav className={styles.overNav}>
        <TabItem onClick={() => changeIndex(3)} selected={3 === index}>
          {items[3].tabTitle}
        </TabItem>
        <TabItem onClick={() => changeIndex(4)} selected={4 === index}>
          {items[4].tabTitle}
        </TabItem>
        <TabItem onClick={() => changeIndex(5)} selected={5 === index}>
          {items[5].tabTitle}
        </TabItem>
        <TabItem onClick={() => changeIndex(6)} selected={6 === index}>
          {items[6].tabTitle}
        </TabItem>
      </nav>
      <nav className={styles.nav}>
        <TabItem onClick={() => changeIndex(7)} selected={7 === index}>
          {items[7].tabTitle}
        </TabItem>
        <TabItem onClick={() => changeIndex(8)} selected={8 === index}>
          {items[8].tabTitle}
        </TabItem>
        <TabItem onClick={() => changeIndex(9)} selected={9 === index}>
          {items[9].tabTitle}
        </TabItem>
      </nav>
    </>
  );

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