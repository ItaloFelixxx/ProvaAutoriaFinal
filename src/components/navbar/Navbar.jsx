import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://pokedex.petrovicstefan.rs/images/poklogo.png"
              alt="logo Site"
              width="default"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand> 
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
