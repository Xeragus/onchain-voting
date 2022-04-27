import '../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <Navbar className='mb-5'>
      <Container>
        <Navbar.Brand href="/">Parliamentary Elections 2022</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Vote</Nav.Link>
          <Nav.Link href="/results">Results</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default App;
