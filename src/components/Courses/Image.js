import React from 'react';
import styled, { css } from 'styled-components';

const Wrap = styled.div`
  display: flex;
  margin: 1rem 0;
`;

const Image = ({ src, width, align = 'left' }) => {
  let justifyContent = 'flex-start';
  if (align === 'center') justifyContent = 'center';
  else if (align === 'right') justifyContent = 'flex-end';

  return (  
    <Wrap style={{ justifyContent }}>
      <img src={src} alt="" style={{ width }} />
    </Wrap>
  );
}
 
export default Image;