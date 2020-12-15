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
          <li className={styles.li}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.li}>
            <Link to="/llpsi">LLPSI</Link>
          </li>
          <li className={styles.li}>
            <Link to="/courses/regular">Regular Courses</Link>
          </li>
          <li className={styles.li}>
            <Link to="/courses/private">Private Courses</Link>
          </li>
          <li className={styles.li}>
            <Link to="/exams">Exams</Link>
          </li>
          <li className={styles.li}>
            <Link to="/fnq">F&Q</Link>
          </li>
          <li className={styles.li}>
            <Link to="/more">More</Link>
          </li>
        </div>
      </nav>
    </header>
  );
}
 
export default Nav;