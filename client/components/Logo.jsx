import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  background-color: #f25621;
  color: #fff;
`;

const Logo = (props) => (
  <StyledLogo>HOSTILEWORLD</StyledLogo>
);

export default Logo;
