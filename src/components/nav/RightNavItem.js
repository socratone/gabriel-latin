import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleMenuButton } from '../../store/reducers/nav';

const style = {
  color: '#707070',
  marginBottom: '8px'
}

const RightNavItem = ({ to, children }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleMenuButton());
  };

  return (  
    <Link to={to} onClick={handleClick} style={style}>
      {children}
    </Link>
  );
}
 
export default RightNavItem;