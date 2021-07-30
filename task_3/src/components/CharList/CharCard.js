import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function CharCard({ char }) {
  return (
    <CharChardWrapper>
      <Link to={`/chars/${char.id}`} key={char.id}>
        <img src={char.image} alt="profile pic" />
        <p>{char.name}</p>
      </Link>
    </CharChardWrapper>
  );
}

const CharChardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #878f99;
  width: 20vw;
  border-radius: 40px;
  margin-bottom: 2rem;
  filter: drop-shadow(0.2rem 0.2rem 0.5rem black);
  img {
    border-radius: 15px;
    filter: drop-shadow(0.1rem 0.1rem 0.25rem darkslategray);
  }
  p {
    text-align: center;
    font-weight:bold;
    font-size: 1.9rem;
  }
`;
