import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque nunc vel lorem scelerisque, sit amet interdum arcu condimentum.
            </p>
          </Col>
          <Col md={6}>
            <h4>Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

