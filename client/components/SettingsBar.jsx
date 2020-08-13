import React from 'react';
import styled from 'styled-components';
import UserIcon from '../assets/user.svg';
import MenuIcon from '../assets/menu.svg';

const StyledSettingsBar = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  width: 220px;
  height: max-content;
  position: relative;
  top: 39px;
  right: 35px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-self: flex-end;
  justify-content: center;
  align-items: center;
`;

const StyledUser = styled.div`
  background-color: rgba(0,0,0,.3);
  border-radius: 5px;
  height: 25px;
  width: max-content;
  padding: 5px;
  margin: 0 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledLanguage = styled.h3`
  background-color: rgba(0,0,0,.3);
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
  display: flex;
  align-self: center;
  align-items: center;
  height: 25px;
  width: max-content;
  padding: 5px 8px;
  margin: 0 5px;
`;

const StyledCurrency = styled.h3`
  background-color: rgba(0,0,0,.3);
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: 25px;
  width: max-content;
  padding: 5px 8px;
  margin: 0 5px;
`;

const StyledMenu = styled.div`
  background-color: rgba(0,0,0,.3);
  border-radius: 5px;
  height: 25px;
  width: max-content;
  padding: 5px;
  margin: 0 0 0 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;

const SettingsBar = (props) => (
  <StyledSettingsBar>
    <StyledUser>
      <UserIcon fill="#fff" width="77%" height="77%" />
    </StyledUser>
    <StyledLanguage>English</StyledLanguage>
    <StyledCurrency>USD</StyledCurrency>
    <StyledMenu>
      <MenuIcon fill="#fff" width="77%" height="77%" />
    </StyledMenu>
  </StyledSettingsBar>
);

export default SettingsBar;
