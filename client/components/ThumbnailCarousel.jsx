import React from 'react';
import styled from 'styled-components';

const StyledThumbnailCarousel = styled.div`
  grid-column: 1 / 5;
  grid-row: 4 / 5;
  display: grid;
  grid-template-columns: repeat(14, 128px);
  grid-template-rows: 1fr;
  grid-auto-columns: max-content;
  gap: 4px;
  overflow: hidden;

`;

// const StyledImageContainer = styled.div`
//   width: 128px;
//   height: 100px;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   margin: 2px;
// `;

const StyledImage = styled.img`
  width: 124px;
  height: 88px;
  grid-column: ${(props) => props.index + 8} / ${(props) => props.index + 9};
  grid-row: 1 / 2;
  object-fit: cover;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-items: center;
  filter: brightness(${(props) => props.index === 0 ? 1 : .3});
  @media (max-width: 1200px) {
    grid-column: ${(props) => props.index + 4} / ${(props) => props.index + 5};
  }
`;

class ThumbnailCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledThumbnailCarousel>
        {this.props.images.map((image) =>
            <StyledImage src={image.url} index={this.props.images.indexOf(image) - this.props.scalar} onClick={() => this.props.onThumbnail(this.props.images.indexOf(image))}/>
        )}
      </StyledThumbnailCarousel>
    )
  }
}

export default ThumbnailCarousel;
