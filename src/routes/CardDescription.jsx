import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const CardDescription = () => {
  const { index } = useParams();

  const [pokemon, setPokemon] = useState([]);
  const [imagem , setimagem] = useState('')
  
  useEffect(() => {
    getPokemons();
  }, []);

  async function getPokemons() {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`).then(
      (response) => response.json().then((data) => {setPokemon(data)
      setimagem(data.sprites.front_default)})
    );
  }
  //pokemon.abilities.map(a){  }
  return (
    <div>
      <img src={imagem} />
        <Table key={index} striped bordered hover variant="dark">
          
          <thead>
            <tr>
              <th>{index}</th>
              <th></th>
              <th>{pokemon.name}</th>
              <th></th>
            </tr>
          </thead>
        </Table>
    </div>
  );
};

export default CardDescription;
