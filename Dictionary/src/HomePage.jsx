import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useDictionary from './hooks/useDictionary';


const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('problem');
  const word = useDictionary(searchTerm);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        // Implement your search functionality here
       
       console.log(word[0])
    };

    return (
        <Container>
            <Title>Dictionary</Title>
            <SearchBar>
                <Input
                    type="text"
                    placeholder="Search for a word..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <SearchButton onClick={handleSearchClick}>
                    <FontAwesomeIcon icon={faSearch} size="sm" />
                </SearchButton>
            </SearchBar>
        </Container>
    );
};

const Container = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #32012F; /* Light gray background */
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif; /* Decorative font */
  font-size: 5rem;
  margin: 0 0 3rem;
  text-align: center;
  color: #E2DFD0; /* Dark gray text */
`;

const SearchBar = styled.div`
  display: flex;
  width: 50%;
  border-radius: 4px; /* Adjust for desired roundness */
  background-color: #fff; /* White background */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const Input = styled.input`
  padding: 1rem;
  font-size: 1.2rem;
  border: none;
  width: 100%;

  &:focus {
    outline: 2px solid #333; /* Blue outline on focus */
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  border: none;
  background-color: #F97300; /* Dark gray background */
  color: #fff; /* White text */
  cursor: pointer;
  border-radius: 4px; /* Match search bar roundness */
`;

const SearchIcon = styled.i`
  /* Replace this with your actual search icon component
   You can use libraries like FontAwesome or Font Awesome 5 */
`;

export default HomePage;

