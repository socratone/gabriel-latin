import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSubItems, toggleMenuButton } from '../../store/reducers/nav';
import { privateCourses, exams, more } from './rightNavSubItems';
import RightNavItem from './RightNavItem';
import styles from './RightNav.module.scss';

const RightNav = () => {
  const dispatch = useDispatch();
  const subItems = useSelector(state => state.ui.nav.subItems);

  const handleClick = () => {
    dispatch(toggleMenuButton());
    dispatch(setSubItems({ subItems: null }));
  };

  if (subItems) {
    return (
      <div className={styles.wrap}>
        <div className={styles.margin} onClick={handleClick} />
        <nav className={styles.nav}>
          {subItems.map(item => 
            <RightNavItem key={item.id} to={item.to}>{item.title}</RightNavItem>
          )}
        </nav>
      </div>
    );
  }

  return (  
    <div className={styles.wrap}>
      <div className={styles.margin} onClick={handleClick} />
      <nav className={styles.nav}>
        <RightNavItem to="/">
          Home
        </RightNavItem>
        <RightNavItem to="/about">
          About
        </RightNavItem>
        <RightNavItem to="/whylatin">
          Why Latin ?
        </RightNavItem>
        <RightNavItem to="/courses/regular">
          Regular Courses
        </RightNavItem>
        <RightNavItem to="/courses/private" subItems={privateCourses}>
          Private Courses
        </RightNavItem>
        <RightNavItem to="/exams" subItems={exams}>
          Exams
        </RightNavItem>
        <RightNavItem to="/more" subItems={more}>
          More
        </RightNavItem>
      </nav>
    </div>
  );
}
 
export default RightNav;