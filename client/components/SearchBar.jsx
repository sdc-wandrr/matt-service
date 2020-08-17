import React from 'react';
import styled from 'styled-components';


const StyledSearchBar = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: 30vw 17.5vw 17.5vw 17.5vw 17.5vw;
  grid-template-rows: 1fr 2fr;
  background-color: #31363f;
  width: 100%;
  height: 100px;
`;

const StyledLocationDiv = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  color: #fff;
  flex-direction: row;
  justify-self: flex-start;
  align-self: end;
  position: relative;
  left: 20px;
  font-size: 12px;
`;

const StyledCheckinDiv = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  color: #fff;
  flex-direction: row;
  justify-self: flex-start;
  align-self: end;
  position: relative;
  font-size: 12px;
`;

const StyledCheckoutDiv = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  display: flex;
  color: #fff;
  flex-direction: row;
  justify-self: flex-start;
  align-self: end;
  position: relative;
  font-size: 12px;
`;

const StyledGuestsDiv = styled.div`
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  display: flex;
  color: #fff;
  flex-direction: row;
  justify-self: flex-start;
  align-self: end;
  position: relative;
  font-size: 12px;
`;

const StyledLocationInput = styled.select`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: flex;
  width: 87%;
  height: 45px;
  flex-direction: row;
  justify-self: flex-start;
  align-self: start;
  position: relative;
  left: 20px;
  margin-top: 2px;
  border: none;
  border-radius: 5px;
`;

const StyledCheckinInput = styled.input`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  display: flex;
  width: 90%;
  height: 45px;
  flex-direction: row;
  justify-self: flex-start;
  align-self: start;
  position: relative;
  margin-top: 2px;
  border: none;
  border-radius: 5px;
`;

const StyledCheckoutInput = styled.input`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  display: flex;
  width: 90%;
  height: 45px;
  flex-direction: row;
  justify-self: flex-start;
  align-self: start;
  position: relative;
  margin-top: 2px;
  border: none;
  border-radius: 5px;
`;

const StyledGuestsInput = styled.input`
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  display: flex;
  width: 90%;
  height: 45px;
  flex-direction: row;
  justify-self: flex-start;
  align-self: start;
  position: relative;
  margin-top: 2px;
  border: none;
  border-radius: 5px;
`;

const StyledSubmit = styled.button`
  grid-column: 5 / 6;
  grid-row: 2 / 3;
  display: flex;
  width: 87%;
  height: 47px;
  color: #fff;
  background-color: #f25621;
  flex-direction: row;
  justify-self: flex-start;
  align-self: start;
  position: relative;
  margin-top: 2px;
  border: none;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  &:hover {
    filter: brightness(.7);
  }
`;


const SearchBar = (props) => (
  <StyledSearchBar>
    <StyledLocationDiv>LOCATION</StyledLocationDiv>
    <StyledLocationInput />
    <StyledCheckinDiv>CHECK IN</StyledCheckinDiv>
    <StyledCheckinInput />
    <StyledCheckoutDiv>CHECK OUT</StyledCheckoutDiv>
    <StyledCheckoutInput />
    <StyledGuestsDiv>GUESTS</StyledGuestsDiv>
    <StyledGuestsInput />
    <StyledSubmit>Search</StyledSubmit>
  </StyledSearchBar>
);

export default SearchBar;