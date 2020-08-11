import React from 'react';
import styled from 'styled-components';
import ImageCounter from './ImageCounter.jsx';
import Logo from './Logo.jsx';
import SettingsBar from './SettingsBar.jsx';

const HeaderImage = (props) => (
  <StyledHeaderImage imagePath={props.images[0].url}>
    <Logo />
    <SettingsBar />
    <ImageCounter images={props.images} />
  </StyledHeaderImage>
);

const StyledHeaderImage = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50px 1fr 75px;
  background-image: url(${props => props.imagePath});
  background-size: cover;
  background-position: center;
`;

export default HeaderImage;
