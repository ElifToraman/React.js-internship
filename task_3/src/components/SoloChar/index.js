import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SoloChar(props) {
  const [char, setChar] = useState([]);
  const [episodeList,setEpisodeList] = useState([]);


  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${props.match.params.id} `)
      .then(res => {
        setChar(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [props.match.params.id]);

  useEffect(() => {
      if(char && char.episode){
        getEpisodes()
      }
  }, [char]);

   const  getEpisodes = () => {
     console.log(getEpisodeIdList(char.episode))
    if(char && char.episode){
          getEpisodeDetails(getEpisodeIdList(char.episode)).then((resp) => {
            setEpisodeList(resp)
          })
    }
  }

  const getEpisodeIdList= (episodeList) => {
      if (episodeList !== null) {
          return episodeList.map((item) => {
              return item.replace('https://rickandmortyapi.com/api/episode/', '')
          });
      } else {
          return false;
      }
  }


  const getEpisodeDetails = async(episodeId) => {
    return  await fetch('https://rickandmortyapi.com/api/episode/' + episodeId)
    .then(response => response.json())
    .then(data => {
        return data;
    });
  }

  return (
    <SoloCharWrapper>
      <Nav>
        <Link to="/chars">Back</Link>
      </Nav>

      <CharCard>
        <h2>Rick and Morty</h2>
        <h3>{char.name}</h3>
        <img src={char.image} alt="profile pic" />
        <p>Status: {char.status}</p>
        <p>Species: {char.species}</p>
        <p>{char.gender}</p>
        <p>{char.origin && char.origin.name}</p>
        <ul>
        {
          episodeList && episodeList.length > 0 && episodeList.map((item, index) => {
            
            return (
              <div key={'episode_'} className={'episode'}>
                            <h3>{item.name} <i>({item.episode})</i></h3>
                            <span className={'episode-air-date'}>{item.air_date}</span>
                            <div className={'clear'}/>
              </div>
            )
          })
        }
        </ul>
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
  background: #878f99;
  width: 50vw;
  border-radius: 15px;
  filter: drop-shadow(0.2rem 0.2rem 0.5rem #e6e2d3);
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
    background: darkgrey;
    border-radius: 0.3rem;
    padding: 0.3rem;
    color: darkblue;
  }
  a:hover {
    color: darkgrey;
    background: white;
  }
`;