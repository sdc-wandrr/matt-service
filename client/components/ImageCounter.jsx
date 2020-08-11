import React from 'react';
import styled from 'styled-components';
import path from 'path';
import ImageIcon from '../assets/image_icon.svg';

const StyledImageCounter = styled.button`
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  background-color: #f25621;
  color: #fff;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  width: 75px;
  height: 35px;
  padding: 10px;
  justify-self: end;
  align-self: center;
  margin: 0 35px 5px 0;
  border-radius: 5px;
  border: none;
`;

const ImageCounter = (props) => (
  <StyledImageCounter>
    <ImageIcon fill="white" />
    <p>1/{props.images.length}</p>
  </StyledImageCounter>
);

export default ImageCounter;
