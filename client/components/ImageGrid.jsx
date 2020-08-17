import React from 'react';
import styled from 'styled-components';
import { ImageGridItem } from './ImageGridItem.jsx';

const StyledGridContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: max-content;
`;

const StyledImageGrid = styled.div`
  width: 95%;
  max-width: 1088px;
  height: max-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  justify-self: center;
  margin-top: 25px;

`;

const ImageGrid = (props) => (
  <StyledGridContainer>
    <StyledImageGrid>
      {props.images.map((image, index) => <ImageGridItem image={image} onModal={props.onModal} index={index} onSelectImage={props.onSelectImage} />)}
    </StyledImageGrid>
  </StyledGridContainer>
);

export {
  ImageGrid,
  StyledImageGrid,
};
