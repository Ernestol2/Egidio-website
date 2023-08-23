import { Container, Nav, Navbar } from "react-bootstrap";
import { GoLocation } from 'react-icons/go'
import { BsWhatsapp } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'

export default function TopNavigation() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="top">
        <Container>
            <Nav>
                <Nav.Link>
                <GoLocation size={25}/>
                Barcelona, Anzoategui.</Nav.Link>
                <Nav.Link>
                <BsWhatsapp size={25}/>
                0412-1867864  -  0412-8373251</Nav.Link>
                <Nav.Link>
                <CiMail size={30}/>
                Solucioneseyfca@gamil.com</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}
