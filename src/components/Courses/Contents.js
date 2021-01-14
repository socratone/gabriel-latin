import React, { useState } from 'react';
import applySpacesAndLineBreaksToText from '../../helper/applySpacesAndLineBreaksToText';
import TabItem from './TabItem';
import styles from './Contents.module.scss';

const Contents = ({ items }) => {
  const [index, setIndex] = useState(0);

  return (  
    <section className={styles.wrap}>
      <nav className={styles.nav}>
        {items.map((item, i) => 
          <TabItem 
            key={i} 
            onClick={() => setIndex(i)}
          >
            {item.tabTitle}
          </TabItem>
        )}
      </nav>
      <div className={styles.item}>
        <div className={styles.imageWrap}>
          <img src={items[index].image} alt="item-image" className={styles.image}/>
        </div>
        <div className={styles.texts}>
          <h3 className={styles.title}>{items[index].title}</h3>
          <div className={styles.description}>
            {applySpacesAndLineBreaksToText(items[index].description)}
          </div>
          <a className={styles.button}>자세히 보기</a>
          <a className={styles.button}>수강 신청하기</a>
        </div>
      </div>
    </section>
  );
}
 
export default Contents;