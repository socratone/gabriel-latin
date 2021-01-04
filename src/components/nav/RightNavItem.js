import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toggleMenuButton } from '../../store/reducers/nav';
import styled, { css } from 'styled-components';

const Link = styled.a`
  display: block;
  color: #707070;
  padding: 10px 0;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

const RightNavItem = ({ to, children }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    history.push(to);
    dispatch(toggleMenuButton());
  };

  return (  
    <Link onClick={handleClick}>
      {children}
    </Link>
  );
}
 
export default RightNavItem;