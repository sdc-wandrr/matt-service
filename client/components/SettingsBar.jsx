import React from 'react';
import styled from 'styled-components';
import UserIcon from '../assets/user.svg';
import MenuIcon from '../assets/menu.svg';

const StyledSettingsBar = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  width: 250px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 50px 0 0 0;
`;

const StyledUser = styled.div`
  background-color: rgba(0,0,0,.3);
  border-radius: 5px;
  padding: 5px;
`;

const StyledLanguage = styled.h3`
  background-color: rgba(0,0,0,.3);
  color: #fff;
  border-radius: 5px;
  padding: 5px;
`;

const StyledCurrency = styled.h3`
  background-color: rgba(0,0,0,.3);
  color: #fff;
  border-radius: 5px;
  padding: 5px;
`;

const StyledMenu = styled.div`
  background-color: rgba(0,0,0,.3);
  border-radius: 5px;
  padding: 5px;
`;

const SettingsBar = (props) => (
  <StyledSettingsBar>
    <StyledUser>
      <UserIcon fill="#fff" />
    </StyledUser>
    <StyledLanguage>English</StyledLanguage>
    <StyledCurrency>USD</StyledCurrency>
    <StyledMenu>
      <MenuIcon fill="#fff" />
    </StyledMenu>
  </StyledSettingsBar>
);

export default SettingsBar;
