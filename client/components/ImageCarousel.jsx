import React from 'react';
import styled from 'styled-components';
import LeftArrowIcon from '../assets/left_arrow.svg';
import RightArrowIcon from '../assets/right_arrow.svg';
import ClearIcon from '../assets/clear.svg';

const StyledImageCarousel = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 50px 1fr 1fr 50px;
  grid-template-rows: 50px 1fr 50px 200px 75px;
  background-color: #31363f;
  border: solid 1px white;
  z-index: 10;
`;

const StyledLeftSidebar = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  display: flex;
  border: solid white 1px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCornerGrid = styled.div`
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid white 1px;
`;

const StyledCurrentImage = styled.img`
  grid-column: 2 / 4;
  grid-row: 1 / 3;
  border: solid white 1px;
  width: auto;
  height: auto;
  max-width: 1186px;
  max-height: 560px;
  display: flex;
  flex-direction: row;
  justify-self: center;
`;

const StyledRightSidebar = styled.div`
  grid-column: 4 / 5;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid white 1px;
`;

const StyledImageCount = styled.div`
  grid-column: 1 / 5;
  grid-row: 3 / 4;
  display: flex;
  border: solid white 1px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,.38);
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 0 15px;
`;

const StyledThumbnailCarousel = styled.div`
  grid-column: 1 / 5;
  grid-row: 4 / 5;
  display: flex;
  border: solid white 1px;
`;

const StyledBackButton = styled.button`
  grid-column: 2 / 3;
  grid-row: 5 / 6;
  display: flex;
  justify-self: center;
  align-self: center;
  background-color: #fff;
  color: #31363f;
  border: none;
  font-size: 12px;
  border-radius: 3px;
  padding: 6px 10px;
`;

const StyledPricesButton = styled.button`
  grid-column: 3 / 4;
  grid-row: 5 / 6;
  display: flex;
  justify-self: center;
  align-self: center;
  background-color: #f25621;
  color: #fff;
  border: none;
  font-size: 12px;
  border-radius: 3px;
  padding: 6px 10px;
`;

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: props.images[0],
      currentImageIndex: 0
    };
  }

  render() {
    return (
      <StyledImageCarousel>
        <StyledLeftSidebar>
          <LeftArrowIcon fill="#fff" width="55px" height="55px" />
        </StyledLeftSidebar>
        <StyledCurrentImage src={this.state.currentImage.url} alt="" />
        <StyledCornerGrid>
          <ClearIcon fill="#fff" width="35px" height="35px" />
        </StyledCornerGrid>
        <StyledRightSidebar>
          <RightArrowIcon fill="#fff" width="55px" height="55px" />
        </StyledRightSidebar>
        <StyledImageCount>{this.state.currentImageIndex + 1}/{this.props.images.length}</StyledImageCount>
        <StyledThumbnailCarousel />
        <StyledBackButton>Back to HOSTEL</StyledBackButton>
        <StyledPricesButton>Check Prices</StyledPricesButton>
      </StyledImageCarousel>
    );
  }
}

export default ImageCarousel;