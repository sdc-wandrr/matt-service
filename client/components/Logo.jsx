import React from 'react';
import styled from 'styled-components';
import LogoIcon from '../assets/logo_icon.svg';

const StyledLogo = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  gap: 5px;
`;

const Logo = (props) => (
  <StyledLogo>
    <LogoIcon fill="#f25621" width="100%" height="100%" viewBox="0 0 450 450" preserveAspectRatio="xMidYMid meet" />
    <h1>HOSTELWORLD</h1>
  </StyledLogo>
);

export default Logo;
