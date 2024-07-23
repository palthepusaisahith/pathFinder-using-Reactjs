import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

// BasicExample component definition
function BasicExample() {
    // Event handler to reload the page
    const clickhandler = () => {
        window.location.reload();
    }

    return (
        // Define the Navbar component with light background and expand on large screens
        <Navbar bg="light" expand="lg">
            <Container>
                {/* Navbar brand with logo */}
                <Navbar.Brand href="#home" className='flex-grow-1'>
              
                </Navbar.Brand>
                
                {/* Centered navigation link */}
                <Nav className="justify-content-center flex-grow-1 pe-0">
                    <Nav.Link href="#" className='fw-bold'> Visualize the algorithms </Nav.Link>
                </Nav>
                
                {/* Navbar toggle for small screens */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                {/* Navbar collapse for small screens */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        {/* Button to clear the board */}
                        <Button variant="outline-success" onClick={clickhandler}>Clear Board</Button>
                        {/* <Nav.Link onClick={clickhandler()}>Clear Board</Nav.Link> */}
                        {/* <Nav.Link href="#link">Link</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample; // Export the BasicExample component as the default export
