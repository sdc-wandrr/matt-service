import React from 'react';
import styled from 'styled-components';


const StyledSearchBar = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  background-color: #31363f;
  width: 100%;
`;

const StyledLocationDiv = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
`;

const StyledCheckinDiv = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
`;

const StyledCheckoutDiv = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  display: flex;
`;

const StyledGuestsDiv = styled.div`
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  display: flex;
`;

const StyledLocationInput = styled.div``;


const SearchBar = (props) => (

);