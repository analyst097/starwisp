import React from 'react';
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';

export default function sidenav() {
    return (
        <Navbar bg="light" expand="lg">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Dashboard</Nav.Link>
                <Nav.Link href="#link">Lorem</Nav.Link>
                <Nav.Link href="#link">Ipsum</Nav.Link>
            </Nav>
        </Navbar>
    )
}
