import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

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
        <h4 style={{color:"white",fontSize:"50px"}}>Rick and Morty!</h4>
      </div>
      <CharListContainer>
        {chars.map(char => {
          return <CharCard key={char.id} char={char} />;
        })}
      </CharListContainer>
    </CharListWrapper>
  );
}

const CharListWrapper = styled.div``;

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 2rem;
  a {
    text-decoration: none;
    font-size: 1.6rem;
    background: #505152;
    border-radius: 0.3rem;
    padding: 0.3rem;
    color: #505152;
  }
  a:hover {
    color: #505152;
    background: darkslateblue;
  }
`;

const CharListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
