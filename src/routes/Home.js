import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    carregarApi();
  }, []);

  async function carregarApi() {
    await fetch("https://pokeapi.co/api/v2/pokemon?limit=15&offset=0").then(
      (response) => response.json().then((data) => setPokemons(data.results))
    );
  }

  return (
    <>
      {pokemons.map((p) => (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Pokemon</Card.Title>
            <Card.Text>{p.name}</Card.Text>
            <Button
              variant="info"
              href="/Navbar"
            >
              Descricao
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default App;