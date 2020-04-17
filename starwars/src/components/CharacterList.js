// Write your Character component here
import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import { Container, Row } from 'reactstrap';

export default function GetCharacters() {

    const [character, setCharacter] = useState([]);
  
    useEffect(() => {
      axios.get(`https://swapi.py4e.com/api/people/`)
      .then(response => {
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.log(`The data was not returned`, error);
      })
    }, []);
    return (
        <Container>
            <Row>
                {character.map(character => {
                    return (
                        <CharacterCard 
                        name = {character.name} 
                        height = {character.height} 
                        mass = {character.mass} 
                        hairColor = {character.hair_color}
                        skinColor = {character.skin_color}
                        eyeColor = {character.eye_color}
                        birthYear = {character.birth_year}
                        gender = {character.gender}
                        />
                    )
                    })}
            </Row>
        </Container>
    )
    }