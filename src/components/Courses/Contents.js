import React from 'react';
import applySpacesAndLineBreaksToText from '../../helper/applySpacesAndLineBreaksToText';
import styles from './Contents.module.scss';
import ContentsNav from './ContentsNav';

const Contents = ({ items, nav, index, changeIndex }) => {
  if (items.length < 1) return null;

  return (  
    <section className={styles.wrap}>
      <ContentsNav 
        items={items} 
        index={index} 
        changeIndex={changeIndex} 
        nav={nav} />
      <div className={styles.item}>
        <div className={styles.imageWrap}>
          <img src={items[index].image} alt="item-image" className={styles.image}/>
        </div>
        <div className={styles.texts}>
          <h3 className={styles.title}>{items[index].title}</h3>
          <div className={styles.description}>
            {applySpacesAndLineBreaksToText(items[index].description)}
          </div>
          <a className={styles.button} href={'#' + items[index].title}>자세히 보기</a>
          {items[index].isOpen && <a className={styles.button} href="#submit-area">수강 신청하기</a>}
        </div>
      </div>
    </section>
  );
}
 
export default Contents;