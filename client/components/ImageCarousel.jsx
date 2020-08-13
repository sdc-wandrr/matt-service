import React from 'react';
import styled from 'styled-components';
import LeftArrowIcon from '../assets/left_arrow.svg';
import RightArrowIcon from '../assets/right_arrow.svg';
import ClearIcon from '../assets/clear.svg';
import { ThumbnailCarousel } from './ThumbnailCarousel.jsx';

const StyledImageCarousel = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 50px 1fr 1fr 50px;
  grid-template-rows: 50px 1fr 50px 200px 75px;
  background-color: #31363f;
  z-index: 10;
`;

const StyledLeftSidebar = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  display: flex;
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
`;

const StyledCurrentImage = styled.img`
  grid-column: 2 / 4;
  grid-row: 1 / 3;
  width: auto;
  height: auto;
  max-width: 1186px;
  max-height: 560px;
  display: flex;
  flex-direction: row;
  justify-self: center;
  border-radius: 2px;
`;

const StyledRightSidebar = styled.div`
  grid-column: 4 / 5;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImageCount = styled.div`
  grid-column: 1 / 5;
  grid-row: 3 / 4;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,.38);
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 0 15px;
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
      currentIndex: this.props.index
    };

    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
  }

  handleLeftClick() {
    if (this.state.currentIndex > 0) {
      this.setState({currentIndex: this.state.currentIndex - 1});
    }
  }

  handleRightClick() {
    if (this.state.currentIndex < this.props.images.length - 1) {
      this.setState({currentIndex: this.state.currentIndex + 1});
    }
  }

  handleThumbnailClick(index) {
    this.setState({currentIndex: index});
  }

  render() {
    return (
      <StyledImageCarousel>
        <StyledLeftSidebar onClick={() => this.handleLeftClick()}>
          <LeftArrowIcon fill="#fff" width="55px" height="55px" />
        </StyledLeftSidebar>
        <StyledCurrentImage src={this.props.images[this.state.currentIndex].url} alt="" />
        <StyledCornerGrid onClick={() => this.props.onExit()}>
          <ClearIcon fill="#fff" width="35px" height="35px" />
        </StyledCornerGrid>
        <StyledRightSidebar onClick={() => this.handleRightClick()}>
          <RightArrowIcon fill="#fff" width="55px" height="55px" />
        </StyledRightSidebar>
        <StyledImageCount>{this.state.currentIndex + 1}/{this.props.images.length}</StyledImageCount>
        <ThumbnailCarousel images={this.props.images} scalar={this.state.currentIndex} onThumbnail={this.handleThumbnailClick} />
        <StyledBackButton onClick={() => this.props.onExit()}>Back to HOSTEL</StyledBackButton>
        <StyledPricesButton>Check Prices</StyledPricesButton>
      </StyledImageCarousel>
    );
  }
}

export {
  ImageCarousel,
  StyledImageCarousel,
  StyledLeftSidebar,
  LeftArrowIcon,
  StyledCurrentImage,
  StyledCornerGrid,
  StyledRightSidebar,
  StyledImageCount,
  ThumbnailCarousel,
  StyledBackButton,
  StyledPricesButton,
};
