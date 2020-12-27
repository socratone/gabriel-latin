import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleMenuButton } from '../../store/nav';

const RightNavItem = ({ to, children }) => {
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(toggleMenuButton());
  };

  return (  
    <Link to={to} onClick={handleClick}>
      {children}
    </Link>
  );
}
 
export default RightNavItem;