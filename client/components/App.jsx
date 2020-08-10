import React from 'react';
import styled from 'styled-components';
import HeaderImage from './HeaderImage.jsx';
import ImageGrid from './ImageGrid.jsx';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 444px 700px 108px;
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
  }

  render() {
    return (
      <Container>
        <HeaderImage />
        <Filler />
        <ImageGrid />
      </Container>
    );
  }
}

export default App;
