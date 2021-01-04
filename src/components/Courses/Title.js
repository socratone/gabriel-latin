import styled, { css } from 'styled-components';

const Title = styled.h3`
  font-size: 1.9rem;
  font-weight: 400;
  margin: 8rem 0 2rem 0;
  
  ${props => props.main && css`
    font-size: 2.25rem;
    font-weight: 700;
    margin: 0 0 3rem 0;
  `}
    
    ${props => props.sub && css`
    font-size: 1.5rem;
    font-weight: 400;
    margin: 3rem 0;
  `}
`;

export default Title;