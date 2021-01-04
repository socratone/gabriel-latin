import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenuButton } from '../../store/reducers/nav';
import RightNavItem from './RightNavItem';
import styles from './RightNav.module.scss';

const RightNav = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleMenuButton());
  };

  return (  
    <div className={styles.wrap}>
      <div className={styles.margin} onClick={handleClick} />
      <nav className={styles.nav}>
        <RightNavItem to="/">
          Home
        </RightNavItem>
        <RightNavItem to="/llpsi">
          LLPSI
        </RightNavItem>
        <RightNavItem to="/courses/regular">
          Regular Courses
        </RightNavItem>
        <RightNavItem to="/courses/private">
          Private Courses
        </RightNavItem>
        <RightNavItem to="/exams">
          Exams
        </RightNavItem>
        <RightNavItem to="/fnq">
          F&Q
        </RightNavItem>
        <RightNavItem to="/more">
          More
        </RightNavItem>
      </nav>
    </div>
  );
}
 
export default RightNav;