import { Container, Row, Col } from 'react-bootstrap';
import {BsInstagram, BsFacebook, BsWhatsapp} from 'react-icons/bs'

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className='g-4 text-center p-4'>
          <Col md={6}>
            <h4>Nuestras redes</h4>
            <div className='socials'>
              <BsInstagram size={30}/>
              <BsFacebook size={30}/>
              <BsWhatsapp size={30}/>
            </div>
          </Col>
          <Col md={6}>
            <h4>Contactanos</h4>
            <p>Email: Solucioneseyfca@gmail.com</p>
            <p>Telefonos: (0412) 186-7864</p>
            <p>Telefonos: (0412) 837-3251</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

