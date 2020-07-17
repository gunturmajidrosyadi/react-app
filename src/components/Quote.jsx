import React, { Component } from 'react'
import { Jumbotron, Row, Col } from "react-bootstrap";
import "./Quote.css"

export default class Quote extends Component {
    render() {
        return (
            <Jumbotron className="quote-page">
                <Row>
                    <Col className="quote">
                        <h1>APAKAH ANDA TAHU:</h1>
                        <h2>Kalau dari kasus tabrakan, Anda tidak</h2>
                        <h2>perlu memberi SIM atau KTP kepada</h2>
                        <h2>orang yang ditabrak</h2>
                    </Col>
                </Row>
            </Jumbotron>
        )
    }
}
