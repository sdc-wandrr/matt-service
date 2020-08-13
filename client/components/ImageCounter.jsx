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
  width: 95px;
  height: 38px;
  padding: 10px;
  justify-self: end;
  align-self: center;
  position: relative;
  bottom: 1px;
  right: 18px;
  border-radius: 5px;
  border: none;
`;

const ImageCounter = (props) => (
  <StyledImageCounter onClick={() => props.onModal()}>
    <ImageIcon fill="white" />
    <p>1/{props.images.length}</p>
  </StyledImageCounter>
);

export {
  ImageCounter,
  StyledImageCounter,
  ImageIcon,
};
