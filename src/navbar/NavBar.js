import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function BasicExample() {
    const clickhandler = () => {
        window.location.reload();
    }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='flex-grow-1'><img
              alt=""
              src="/images/infinityslap_logolight.jpeg"
              width="100"   
              height="52"
              className="d-inline-block align-top"
            />{' '}</Navbar.Brand>
            <Nav className="justify-content-center flex-grow-1 pe-0">
            <Nav.Link href="#"className='fw-bold'> Visualize the algorithms </Nav.Link>
          </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
          <Button variant="outline-success"onClick={clickhandler}>Clear Board</Button>
            {/* <Nav.Link onClick={clickhandler()}>Clear Board</Nav.Link> */}
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;