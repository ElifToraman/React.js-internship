import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CharCard from "./CharCard";
import axios from "axios";

export default function CharList() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setChars(res.data.results);
      })
      .catch(err => {
        alert(err.message);
      });
  }, []);

  return (

    
    <CharListWrapper>
      <div>
        <h4>Rick&Morty!</h4>
      </div>
      <CharListContainer>
        {chars.map(char => {
          return <CharCard key={char.id} char={char} />;
        })}
      </CharListContainer>
    </CharListWrapper>
  );
}

const CharListWrapper = styled.div`
h4 { 
  text-align: center;
  font-size:5rem;
  color:white;
  font-weight:bold;
}
`;

const CharListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
