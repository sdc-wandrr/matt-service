import React from 'react';
import styled from 'styled-components';

const StyledImageCounter = styled.button`
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  background-color: #f25621;
  color: #fff;
  font-weight: 700;
`;

const ImageCounter = (props) => (
  <StyledImageCounter>1/28</StyledImageCounter>
);

export default ImageCounter;
