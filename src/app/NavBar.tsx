"use client"

import Link from 'next/link'
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { usePathname } from "next/navigation"

export default function NavBar() {
    const pathname = usePathname()

    return (
        <Navbar bg="white" variant="light" sticky="top" expand="sm" collapseOnSelect className="border-bottom">
            <Container>
                <Navbar.Brand as={Link} href="/" className="d-flex flex-column">
                    <span className="h4 mb-0">Galería Dinámica de Imágenes</span>
                    <span className="text-muted" style={{ fontSize: '0.75rem' }}>por Ernesto</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} href="/static" active={pathname === "/static"}>Contenido Estático</Nav.Link>
                        <Nav.Link as={Link} href="/dynamic" active={pathname === "/dynamic"}>Contenido Dinámico</Nav.Link>
                        <Nav.Link as={Link} href="/isr" active={pathname === "/isr"}>REI</Nav.Link>
                        <NavDropdown title="Categorías" id="topics-dropdown">
                            <NavDropdown.Item as={Link} href="/topics/health">Salud</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/topics/fitness">Bienestar</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/topics/coding">Desarrollo</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} href="/search" active={pathname === "/search"}>Buscar</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}