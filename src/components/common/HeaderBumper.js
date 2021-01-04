import styled from 'styled-components';

const HEADER_HEIGHT_MOBILE = '40px'

const HeaderBumper = styled.section`
  flex-shrink: 0;
  height: 60px;

  @media (max-width: 800px) {
    height: ${HEADER_HEIGHT_MOBILE};
  }
`;

export default HeaderBumper;