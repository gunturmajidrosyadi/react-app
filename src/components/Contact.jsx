import React, { Component } from 'react'
import { Container, Image, Row, Col } from "react-bootstrap";
import "./Contact.css"

export default class Contact extends Component {
    render() {
        return (
            <Container className="contact" id="contact">
                <div className="contact-title">
                    <h1>Have a question?</h1>
                </div>
                <dic className="contact-page">
                    <Row className="contact-section">
                        <Col xs={12} sm={4} className="contact-card">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <Row className="contact-pict">
                                        <Col sm="3">
                                            <Image src="assets/mail.png" fluid />
                                        </Col>
                                    </Row>
                                </div>
                                <div className="contact-info">
                                    <a href="#">info@hakita.com</a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} className="contact-card">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <Row className="contact-pict">
                                        <Col sm="3">
                                            <Image src="assets/pin.png" fluid/>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="contact-info">
                                    <p>Jl. Boulevard Barat Raya No. 27,</p>
                                    <p>Kelapa Gading Barat,</p>
                                    <p>Jakarta Utara</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </dic>
            </Container>
        )
    }
}
