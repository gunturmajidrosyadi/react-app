import React, { Component } from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";
import './Product.css'

export default class Product extends Component {
    render() {
        return (
            <Container className="product">
                <Row>
                    <Col xs={12} sm={4} className="product-card">
                        <Row className="product-content">
                            <Col sm={3}>
                                <Image src="assets/user-need1.png" className="product-pict" fluid />
                            </Col>
                            <Col sm={9} className="product-label">
                                <h5>We Meet People’s Needs</h5>
                                <p>Kami sadar bahwa hukum masih dianggap sebagai sesuatu yang menakutkan dan belum terjangkau untuk semua golongan. Inilah mengapa kami ada; untuk melawan stigma dan menjawab segala kebutuhan legal Anda.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={4} className="product-card">
                        <Row className="product-content">
                            <Col sm={3}>
                                <Image src="assets/user-need2.png" className="product-pict" fluid />
                            </Col>
                            <Col sm={9} className="product-label">
                                <h5>We Provide Protection</h5>
                                <p>Dibantu oleh praktisi hukum dengan pengalaman lebih dari 10 tahun, HAKITA memastikan bahwa Anda mendapatkan perlindungan hukum yang sesuai dengan hak Anda sebagai warga negara.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={4} className="product-card">
                        <Row className="product-content">
                            <Col sm={3}>
                                <Image src="assets/user-need3.png" className="product-pict" fluid />
                            </Col>
                            <Col sm={9} className="product-label">
                                <h5>We Are Trustworthy</h5>
                                <p>HAKITA hadir karena kami percaya bahwa hukum adalah hak semua orang. Semua yang kami lakukan di HAKITA selalu selaras dengan misi kami untuk menjadikan hukum sebagai sesuatu yang mudah dimengerti dan dapat diakses oleh semua orang.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}
