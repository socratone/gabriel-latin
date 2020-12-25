import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

const Nav = () => {
  return (  
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.topNav}>
          Gabriel Institutum Latinitatis
        </div>
        <div className={styles.bottomNav}>
          <Link to="/" className={styles.li}>Home</Link>
          <Link to="/llpsi" className={styles.li}>LLPSI</Link>
          <Link to="/courses/regular" className={styles.li}>Regular Courses</Link>
          <Link to="/courses/private" className={styles.li}>Private Courses</Link>
          <Link to="/exams" className={styles.li}>Exams</Link>
          <Link to="/fnq" className={styles.li}>F&Q</Link>
          <Link to="/more" className={styles.li}>More</Link>
        </div>
      </nav>
    </header>
  );
}
 
export default Nav;