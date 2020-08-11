import React from 'react';
import styled from 'styled-components';

const StyledSettingsBar = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  background-color: #f25621;
  width: 100%;
  height: 100%;
`;

const SettingsBar = (props) => (
  <StyledSettingsBar />
);

export default SettingsBar;
