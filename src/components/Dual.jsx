import { Card, Col, Container, Row } from "react-bootstrap";
import BgLeft from '../images/left.jpeg'
import BgRigth from '../images/rigth.jpg'

export default function Dual() {
  return (
    <Container className="dual">
        <Row className="g-4">
            <Col className="left"  md={6} lg={4}>
              <Card className="bg-dark text-white">
                <Card.Img src={BgLeft} alt="Card image" />
                <Card.Body>
                  <Card.Title>SOLUCIONES A TU MEDIDA</Card.Title>
                  <Card.Text>
                  Ensamblado de computadores para empresas, Gamers, Mantenimiento preventivo, Respaldos, Antivirus, Instalacion de sistemas Operativos.
                  </Card.Text>
                </Card.Body>
              </Card>            
            </Col>
            <Col className="rigth" md={6} lg={4}>
                <Card className="bg-dark text-white">
                    <Card.Img src={BgRigth} alt="Card image" />
                    <Card.Body>
                      <Card.Title>PROYECTOS DE INGENIERIA</Card.Title>
                      <Card.Text>
                      Redes, Servidores, Control de Acceso, Alarmas, Cámaras de Seguridad, Cercado Eléctrico, Cableado estructurado, iluminación, puertas automáticas.
                      </Card.Text>
                    </Card.Body>
                  </Card>
            </Col>
        </Row>
    </Container>
  )
}


