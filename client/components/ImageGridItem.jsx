import React from 'react';
import styled from 'styled-components';

const StyledImageGridItem = styled.div`
  width: 90px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 85px;
  height: 55px;
  border-radius: 2.5px;
`;

const ImageGridItem = (props) => (
  <StyledImageGridItem onClick={() => props.onSelectImage(props.index)}>
    <StyledImage src={props.image.url} />
  </StyledImageGridItem>
);

export {
  ImageGridItem,
  StyledImageGridItem,
  StyledImage,
};
