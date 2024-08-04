import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Badge from "react-bootstrap/Badge";

const Navbar1 = ({ setCategory }) => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        Navbar
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand>
            <Badge
              bg="danger"
              style={{
                fontSize: "20px",
                color: "lightgoldenrodyellow",
              }}
            >
              News Latest
            </Badge>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setCategory("technology")}>
                Technology
              </Nav.Link>
              <Nav.Link onClick={() => setCategory("business")}>
                Business
              </Nav.Link>
              <Nav.Link onClick={() => setCategory("health")}>Health</Nav.Link>
              <Nav.Link onClick={() => setCategory("sports")}>Sports</Nav.Link>
              <Nav.Link onClick={() => setCategory("entertainment")}>
                Entertainment
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
