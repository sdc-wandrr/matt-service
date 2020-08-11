import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import HeaderImage from './HeaderImage.jsx';
import ImageGrid from './ImageGrid.jsx';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 444px 200px 108px;
  width: 100%;
  height: 100%;
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
    };
    this.fetchImagesByHostelId = this.fetchImagesByHostelId.bind(this);
  }

  componentDidMount() {
    // THIS IS HARDCODED CURRENTLY
    // MUST FIND WAY TO ACCESS CURRENT HOSTEL ID
    // FROM URL
    this.fetchImagesByHostelId(Math.floor(Math.random() * (50 - 1) + 1));
  }

  fetchImagesByHostelId(id) {
    $.ajax({
      url: `/api/hostels/${id}/images`,
      type: 'GET',
      dataType: 'json',
      success: (results) => {
        console.log(results);
        this.setState({
          images: [...results],
        });
        console.log(this.state.images);
      },
      error: () => console.log('An error occurred fetching images'),
    });
  }

  render() {
    return (
      <Container>
        {this.state.images.length > 0 &&
          <HeaderImage images={[...this.state.images]} />
        }
        <Filler />
        <ImageGrid images={[...this.state.images]} />
      </Container>
    );
  }
}

export default App;
