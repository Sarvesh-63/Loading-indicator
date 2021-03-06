import {Navbar,Container,Nav,InputGroup,FormControl,Button} from "react-bootstrap";
  const CustomAppBar = ({ label, onSearch }) => {
    return (
      <Navbar bg="dark" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand>
            <img src="../logo.svg" alt="logo" height={80} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav>
            <InputGroup className="mb-3">
              <FormControl placeholder="Search " aria-label="search on ta youtube"  onChange={onSearch} />
              <Button variant="danger" type="submit">
                Search
              </Button>
              <Button variant="outline-light" href="../license">
                License
              </Button>
            </InputGroup>
          </Nav>
        </Container>
      </Navbar>
    );
  };
  
  export default CustomAppBar;

