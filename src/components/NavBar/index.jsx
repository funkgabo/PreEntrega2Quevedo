import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DorianLogo from '../../assets/DS.svg'
import Container from 'react-bootstrap/Container';
import { CartWidget } from '../CartWidget';


export const NavBar = () => {
    return (
        <Navbar expand="sm" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"><img src={DorianLogo} height={40} /></Navbar.Brand>
                <Row>
                    <Col>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto justify-content-around flex-grow-1">
                                <Nav.Link href="#home">Camisas</Nav.Link>
                                <Nav.Link href="#link">Poleras</Nav.Link>
                                <Nav.Link href="#link">Bluzas</Nav.Link>
                                <Nav.Link href="#link">Carteras</Nav.Link>
                                <Nav.Link href="#link">Zapatos</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col>
                        <CartWidget />
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}
