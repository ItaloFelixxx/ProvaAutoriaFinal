import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../components/styles.css";

const CardDescription = () => {
  const { index } = useParams();

  const [pokemon, setPokemon] = useState([]);
  const [imagem, setImagem] = useState("");

  useEffect(() => {
    getPokemons()
  }, []);

  async function getPokemons() {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`).then(
      (response) =>
        response.json().then((data) => {
          setPokemon(data);
          setImagem(
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`
          );
        })
    );
  }

  return (
    <div id = "container">
      <ul>
        <li>
          <img id="pok" src={imagem} />
        </li>
        <li>
          <p>Nome: {pokemon.name}</p>
          <p>Peso: {pokemon.height}</p>
          <p>Altura: {pokemon.weight}</p>
        </li>
      </ul>
    </div>
  );
};

export default CardDescription;
