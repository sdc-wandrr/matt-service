import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import { HeaderImage } from './HeaderImage.jsx';
import { ImageGrid } from './ImageGrid.jsx';
import { ImageCarousel } from './ImageCarousel.jsx';

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap");

  html {
    scroll-behavior: smooth;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 444px 300px 145px 400px;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
const Filler = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background-color: #31363f;
  width: 100%;
  height: 100%;
`;

const AvailabilityFiller = styled.div`
  grid-column: 1 / 2;
  grid-row: 4 / 5;
  background-color: #31363f;
  width: 100%;
  height: 100%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      showModal: false,
      hostelId: 1,
      currentImageIndex: 0,
    };

    this.fetchImagesByHostelId = this.fetchImagesByHostelId.bind(this);
    this.showImageCarousel = this.showImageCarousel.bind(this);
    this.handleExitClick = this.handleExitClick.bind(this);
    this.handleGridItemSelect = this.handleGridItemSelect.bind(this);
    this.handleAvailabilityRedirect = this.handleAvailabilityRedirect.bind(this);
  }

  componentDidMount() {
    this.setCurrentHostelId();
  }

  setCurrentHostelId() {
    const pathToId = window.location.pathname;
    const reg = /[0-9]+/g;
    const id = pathToId.match(reg);
    const strippedId = id[0];
    this.setState({hostelId: strippedId});
    this.fetchImagesByHostelId(id);
  }

  handleExitClick() {
    this.setState({
      showModal: false,
      currentImageIndex: 0,
    });
  }

  handleAvailabilityRedirect() {
    this.handleExitClick();
    // this.setState({shouldScroll: true});
  }

  showImageCarousel() {
    this.setState({ showModal: true });
  }

  handleGridItemSelect(index) {
    this.setState({ currentImageIndex: index });
    this.showImageCarousel();
  }

  fetchImagesByHostelId(id) {
    axios.get(`/api/hostels/${id}/images`)
      .then((results) => {
        this.setState({
          images: results.data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        {!this.state.showModal &&
          (
          <Container>
            {this.state.images.length > 0 &&
              <HeaderImage images={this.state.images} onModal={this.showImageCarousel} />
            }
            <Filler />
            <ImageGrid images={this.state.images} onModal={this.showImageCarousel} onSelectImage={this.handleGridItemSelect} />
            <AvailabilityFiller></AvailabilityFiller>
          </Container>
          )
        }
        { this.state.showModal &&
          <ImageCarousel images={this.state.images} onExit={this.handleExitClick} index={this.state.currentImageIndex} onRedirect={this.handleAvailabilityRedirect} />
        }
      </div>
    );
  }
}

export default App;
