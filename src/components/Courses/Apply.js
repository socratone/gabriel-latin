import React from 'react';
import styles from './Apply.module.scss';

const Apply = () => {
  return (  
    <>
      <section className={styles.inputWrap}>
        <h3 className={styles.title}>신청하기</h3>
        <div className={styles.item}>
          <label className={styles.label}>이름</label>
          <input type="text" className={styles.textInput}/>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>성별</label>
          <input type="text" className={styles.textInput}/>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>생년월일</label>
          <input type="text" className={styles.textInput}/>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>전화번호</label>
          <input type="text" className={styles.textInput}/>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>이메일</label>
          <input type="text" className={styles.textInput}/>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>라틴어를 처음 접하시나요? 아니라면 어느 정도 공부하셨나요?</label>
          <textarea type="text" className={styles.textArea}/>
        </div>
        <div className={styles.itemBottom}>
          <label className={styles.label}>어떤 언어를 알고 계시나요? 어느 정도 수준이신가요?</label>
          <textarea type="text" className={styles.textArea}/>
        </div>
      </section>
      <div className={styles.submitWrap}>
        <button className={styles.submitButton}>제출하기</button>
      </div>
    </>
  );
}
 
export default Apply;