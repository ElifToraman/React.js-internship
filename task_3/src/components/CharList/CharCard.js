import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

export default function CharCard({ char }) {
  return (
    <CharChardWrapper>
      <Link to={`/chars/${char.id}`} key={char.id}>
        <p>{char.name}</p>
        <img src={char.image} alt="profile pic" />
      </Link>
      <p>{char.species}</p>
      <p>{char.gender}</p>
      <p>{char.origin.name}</p>
    </CharChardWrapper>
  );
}

const CharChardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 45vw;
  border-radius: 15px;
  margin-bottom: 2rem;
  filter: drop-shadow(0.2rem 0.2rem 0.5rem darkblue);
  h3 {
    font-size: 2rem;
  }
  img {
    border-radius: 15px;
    filter: drop-shadow(0.1rem 0.1rem 0.25rem darkslategray);
  }
  p {
    font-size: 1.4rem;
  }
`;
