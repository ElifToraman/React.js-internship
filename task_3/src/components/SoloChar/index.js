import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SoloChar(props) {
  const [char, setChar] = useState([]);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${props.match.params.id} `)
      .then(res => {
        setChar(res.data);
        console.log("Response:", res);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [props.match.params.id]);


  return (
    <SoloCharWrapper>
      <Nav>
        <Link to="/chars">Back</Link>
      </Nav>

      <CharCard>
        <h3>{char.name}</h3>
        <img src={char.image} alt="profile pic" />
        <p>Status: {char.status}</p>
        <p>Species: {char.species}</p>
        <p>{char.gender}</p>
        <p>{char.origin && char.origin.name}</p>
      
      </CharCard>
    </SoloCharWrapper>
  );
}





const SoloCharWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 15px;
    filter: drop-shadow(0.1rem 0.1rem 0.25rem darkslategray);
  }
`;

const CharCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: red;
  width: 50vw;
  border-radius: 15px;
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

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 2rem;
  a {
    text-decoration: none;
    font-size: 1.6rem;
    background: red;
    border-radius: 0.3rem;
    padding: 0.3rem;
    color: darkblue;
  }
  a:hover {
    color: red;
    background: darkslateblue;
  }
`;
