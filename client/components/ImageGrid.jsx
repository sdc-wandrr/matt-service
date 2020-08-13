import React from 'react';
import styled from 'styled-components';
import { ImageGridItem } from './ImageGridItem.jsx';

const StyledImageGrid = styled.div`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  width: 1088px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  justify-self: center;
`;

const ImageGrid = (props) => (
  <StyledImageGrid>
    {props.images.map((image, index) => <ImageGridItem image={image} onModal={props.onModal} index={index} onSelectImage={props.onSelectImage} />)}
  </StyledImageGrid>
);

export {
  ImageGrid,
  StyledImageGrid,
};
