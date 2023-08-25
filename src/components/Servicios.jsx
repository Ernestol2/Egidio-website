import { Col, Container, Row } from "react-bootstrap";
import { BiLaptop } from 'react-icons/bi'
import { ImMobile } from 'react-icons/im'
import {FaServer} from 'react-icons/fa'
import {BsPlaystation, BsTools} from 'react-icons/bs'
import {BiCctv} from 'react-icons/bi'

export default function Servicios() {
  return (
    <div className="servicios-container">
        <Container className="servicios">
            <h2 className="text-center p-2">SERVICIOS ADICIONALES</h2>
            <hr />
            <div className="divider"></div>
            <Row className="items">
                <Col md={6}>
                    <div className="p-3">
                        <BiLaptop size={60}/>
                    </div>
                    <h3>Computadoras</h3>
                    <p>Reparacion y mantenimiento en general de laptos, macbooks y PC de escritorios. MAC, Windows, Linux.</p>
                </Col>
                <Col md={6}>
                    <div className="p-3">
                        <ImMobile size={50}/>
                    </div>
                    <h3>Movil</h3>
                    <p>Reparacion y mantenimiento de telefonos moviles. Android, Apple, etc. Pantallas, Laminas protectoras.</p>
                </Col>
                <Col md={6} >
                    <div className="p-3">
                        <FaServer size={50}/>
                    </div>
                    <h3>Infraestructutas y Redes</h3>
                    <p>Cableado estructurado, Redes, WiFi, Servidores, Asesoria, Soporte.</p>
                </Col>
                <Col md={6} >
                    <div className="p-3">
                        <BsPlaystation size={50}/>
                    </div>
                    <h3>Consolas Videojuegos</h3>
                    <p>Reparacion y mantenimiento de consolas de videojuegos PS4.</p>
                </Col>
                <Col md={6} >
                    <div className="p-3">
                        <BiCctv size={50}/>
                    </div>
                    <h3>CCTV</h3>
                    <p>Servicio, mantenimiento e Instalacion de sistemas cctv en general. Cableado, limpieza, activacion.</p>
                </Col>
                <Col md={6} >
                    <div className="p-3">
                        <BsTools size={50}/>
                    </div>
                    <h3>Actualizaciones</h3>
                    <p>Sistemas Operativos, Antivirus y programas en general. Instalacion de discos duros SSD, memoria RAM.</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
