import React from 'react';
import styled from 'styled-components';
import { ImageGridItem } from './ImageGridItem.jsx';


const StyledGridContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: max-content;
`;

const StyledImageGrid = styled.div`
  width: 100%;
  max-width: 1088px;
  height: 145px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  justify-self: center;
  margin-top: 25px;
  @media (max-width: 1200px) {
    height: max-content;
  }

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
