import React from 'react';
import styled from 'styled-components';

const StyledImageGridItem = styled.div`
  width: 74px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 68px;
  height: 45px;
`;

const ImageGridItem = (props) => (
  <StyledImageGridItem>
    <StyledImage src={props.image.url} />
  </StyledImageGridItem>
)

export default ImageGridItem;
