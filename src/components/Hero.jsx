import React, { Component } from 'react'
import { Container, Navbar, Nav, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Hero.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default class Hero extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/"><Image src="assets/logo.png" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#services">Service</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#article">Blog</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Link to="/" className="login">
                        <Button variant="outline-success">< FontAwesomeIcon icon={faUser} /> Masuk</Button>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        ) 
    }
}
