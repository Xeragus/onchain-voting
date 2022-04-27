import '../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Navbar className='mb-5'>
      <Container>
        <Navbar.Brand href="/" style={{ textAlign: 'center', width: '100%' }} className="mt-5">
          On-Chain Elections
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default App;
