import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Jumbotron>
                <Row>
                    <Col className="homepage">
                        <h1>Urusan Legal Jadi Lebih</h1>
                        <h1>Gampang dengan Hakita</h1>
                        <Link to="/blog">
                            <Button variant="primary">Baca Artikel</Button>
                        </Link>
                    </Col>
                    <Col></Col>
                </Row>
            </Jumbotron>
        )
    }
}
