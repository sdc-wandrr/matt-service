import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import { HeaderImage } from './HeaderImage.jsx';
import { ImageGrid } from './ImageGrid.jsx';
import { ImageCarousel } from './ImageCarousel.jsx';

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap");

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 444px 200px 108px;
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      showModal: false,
      hostelId: 1
    };
    this.fetchImagesByHostelId = this.fetchImagesByHostelId.bind(this);
    this.showImageCarousel = this.showImageCarousel.bind(this);
    this.handleExitClick = this.handleExitClick.bind(this);
  }

  componentDidMount() {
    // THIS IS HARDCODED CURRENTLY
    // MUST FIND WAY TO ACCESS CURRENT HOSTEL ID
    // FROM URL
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
    this.setState({showModal: false});
  }

  showImageCarousel() {
    this.setState({ showModal: true });
  }

  fetchImagesByHostelId(id) {
    axios.get(`/api/hostels/${id}/images`)
      .then((results) => {
        this.setState({
          images: [...results.data],
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
            <ImageGrid images={this.state.images} onModal={this.showImageCarousel} />
          </Container>
          )
        }
        { this.state.showModal &&
          <ImageCarousel images={this.state.images} onExit={this.handleExitClick} />
        }
      </div>
    );
  }
}

export default App;
