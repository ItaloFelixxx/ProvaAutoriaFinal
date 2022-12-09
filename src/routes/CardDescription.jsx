import React from "react";
import Header from "../components/navbar/Navbar";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";

const CardDescription = ( props ) => {
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    getPokemons();
  }, []);

  async function getPokemons() {
    await fetch("https://pokeapi.co/api/v2/pokemon?limit=3&offset=0").then(
      (response) => response.json().then((data) => setPokemons(data.results))
    );
  }

  return (
    <>
      <Header />
      {pokemons.map((p, index) => (
        <Table key={index} striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>{index}</th>
              <th></th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
        </Table>
      ))}
    </>
  );
};

export default CardDescription;
