import { Card, Col, Container, Row } from "react-bootstrap";
import { serviciosDB } from "../serviciosDB";



export default function Dual() {
  return (
    <Container className="dual mt-4">
      <h2 className="p-4 text-center">AUTOMATIZACION</h2>
      <hr className="p-4"/>
        <Row className="g-4">
            {serviciosDB.map(servicio => (
              <Col xs={10} md={6} lg={4} key={servicio.id}>
              <Card className="">
                <Card.Img src={servicio.image} alt="Card image"/>
                <Card.Body>
                  <Card.Title>{servicio.name}</Card.Title>
                  <hr />
                  <Card.Text>
                  Ensamblado de computadores para empresas, Gamers, Mantenimiento preventivo, Respaldos, Antivirus, Instalacion de sistemas Operativos.
                  </Card.Text>
                </Card.Body>
              </Card>            
            </Col>
            ))}
        </Row>
    </Container>
  )
}   


