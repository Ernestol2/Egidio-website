import { Col, Container, Row } from "react-bootstrap";
import { BiLaptop } from 'react-icons/bi'
import { ImMobile } from 'react-icons/im'
import {FaServer} from 'react-icons/fa'
import {BsPlaystation} from 'react-icons/bs'

export default function Servicios() {
  return (
    <div className="servicios-container">
        <Container className="servicios">
            <h2 className="text-center p-2">NUESTROS SERVICIOS</h2>
            <div className="divider"></div>
            <Row className="items">
                <Col md={6} >
                    <div className="p-2">
                        <BiLaptop size={60}/>
                    </div>
                    <h3>Computadoras</h3>
                    <p>Reparacion y mantenimiento de laptos y PC de escritorios. MAC, Windows, Linux.</p>
                </Col>
                <Col md={6} >
                    <div className="p-2">
                        <ImMobile size={60}/>
                    </div>
                    <h3>Movil</h3>
                    <p>Reparacion y mantenimiento de telefonos moviles. Android, Apple, etc.</p>
                </Col>
                <Col md={6} >
                    <div className="p-2">
                        <FaServer size={60}/>
                    </div>
                    <h3>Infraestructutas y Redes</h3>
                    <p>Cableado estructurado, Redes, WiFi, Servidores, Asesoria, Soporte.</p>
                </Col>
                <Col md={6} >
                    <div className="p-2">
                        <BsPlaystation size={60}/>
                    </div>
                    <h3>Consolas Videojuegos</h3>
                    <p>Reparacion y mantenimiento de consolas de videojuegos PS4.</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
