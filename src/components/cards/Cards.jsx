import { useEffect, useState } from "react";
import { Card, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function Cards() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  async function getPokemons() {
    await fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0").then(
      (response) => response.json().then((data) => setPokemons(data.results))
    );
  }

  return (
    <>
    
      <Container>
        <Row className="justify-content-md-center">
          {pokemons.map((p, index) => (
            <Card key={index} style={{ width: "12rem" }}>
              <Card.Img src="pokebola.png" />
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>
                <Link to={`/cardDescription/${index+1}`}>
                  <Button variant="dark" >
                    Descrição
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Cards;
