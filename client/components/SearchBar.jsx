import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../assets/search.svg';
import CalendarIcon from '../assets/calendar.svg';
import GuestsIcon from '../assets/guests.svg';

const StyledSearchBar = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  background-color: #31363f;
  width: 100%;
  height: 100px;
`;

const StyledLocationDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  width: 250px;
  height: 85px;
  font-size: 12px;
  margin: 0 5px 0 15px;
`;

const StyledLocationInnerField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 250px;
  height: 45px;
`;

const StyledCheckinDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  width: 170px;
  height: 85px;
  font-size: 12px;
  margin: 0 5px;
`;

const StyledCheckinInnerField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 170px;
  height: 45px;
`;

const StyledCheckoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  width: 170px;
  height: 85px;
  font-size: 12px;
  margin: 0 5px;
`;

const StyledCheckoutInnerField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 170px;
  height: 45px;
`;

const StyledGuestsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  width: 170px;
  height: 85px;
  font-size: 12px;
  margin: 0 5px;
`;

const StyledGuestsInnerField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 170px;
  height: 45px;
`;

const StyledSubmitDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  color: #fff;
  width: 125px;
  height: 85px;
  font-size: 12px;
  margin: 0 5px;
`;

const StyledLocationInput = styled.select`
  width: 205px;
  height: 45px;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 0 5px;
`;

const StyledLocationInputLabel = styled.label`
  display: flex;
  width: 45px;
  height: 45px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 0 5px;
`;

const StyledCheckinInput = styled.input`
  display: flex;
  width: 125%;
  height: 45px;
  flex-direction: row;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 0 5px;
`;

const StyledCheckinInputLabel = styled.label`
  display: flex;
  width: 45px;
  height: 45px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 0 5px;
`;

const StyledCheckoutInput = styled.input`
  display: flex;
  width: 125px;
  height: 45px;
  flex-direction: row;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 0 5px;
`;

const StyledCheckoutInputLabel = styled.label`
  display: flex;
  width: 45px;
  height: 45px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 0 5px;
`;

const StyledGuestsInput = styled.input`
  width: 125px;
  height: 45px;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 0 5px;
`;

const StyledGuestsInputLabel = styled.label`
  display: flex;
  width: 45px;
  height: 45px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 0 5px;
`;

const StyledSubmit = styled.button`
  display: flex;
  width: 125px;
  height: 47px;
  color: #fff;
  background-color: #f25621;
  flex-direction: row;
  border: none;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  &:hover {
    filter: brightness(.7);
  }
`;

const StyledOption = styled.option`
  width: 270px;
  height: 45px;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 0 5px;
`;


const SearchBar = (props) => (
  <StyledSearchBar>
    <StyledLocationDiv>
      <p>LOCATION</p>
      <StyledLocationInnerField>
        <StyledLocationInputLabel>
          <SearchIcon width="55%" height="55%" fill="#f25621" />
        </StyledLocationInputLabel>
        <StyledLocationInput>
          <StyledOption>Where do you want to go?</StyledOption>
        </StyledLocationInput>
      </StyledLocationInnerField>
    </StyledLocationDiv>
    <StyledCheckinDiv>
      <p>CHECK IN</p>
      <StyledCheckinInnerField>
        <StyledCheckinInputLabel>
          <CalendarIcon width="78%" height="78%" fill="#f25621" />
        </StyledCheckinInputLabel>
        <StyledCheckinInput type="text" value="August 28th, 2020"></StyledCheckinInput>
      </StyledCheckinInnerField>
    </StyledCheckinDiv>
    <StyledCheckoutDiv>
      <p>CHECK OUT</p>
      <StyledCheckoutInnerField>
        <StyledCheckoutInputLabel>
          <CalendarIcon width="78%" height="78%" fill="#f25621" />
        </StyledCheckoutInputLabel>
        <StyledCheckoutInput type="text" value="August 30th, 2020"></StyledCheckoutInput>
      </StyledCheckoutInnerField>
    </StyledCheckoutDiv>
    <StyledGuestsDiv>
      <p>GUESTS</p>
      <StyledGuestsInnerField>
        <StyledGuestsInputLabel>
          <GuestsIcon width="78%" height="78%" fill="#f25621" />
        </StyledGuestsInputLabel>
        <StyledGuestsInput type="text" value="2 Guests" />
      </StyledGuestsInnerField>
    </StyledGuestsDiv>
    <StyledSubmitDiv>
      <StyledSubmit>Search</StyledSubmit>
    </StyledSubmitDiv>
  </StyledSearchBar>
);

export default SearchBar;
