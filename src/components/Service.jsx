import React, { Component } from 'react'
import { Container, Button ,Image, Row, Col } from "react-bootstrap";
import './Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default class Service extends Component {
    render() {
        return (
            <Container className="services" id="services">
                <Row className="service-item">
                    <Col xs={12} sm={4} className="service-card">
                        <div>
                            <Row className="service-icon">
                                <Col xs={4}>
                                    <Image src="assets/service1.png" fluid />
                                </Col>
                            </Row>
                        </div>
                        <div className="service-label">
                            <h5>Otomasi Dokumen</h5>
                            <p>
                                Buat dokumen sudah tidak perlu ribet lagi. Dokumen yang biasa butuh waktu berminggu-minggu sekarang bisa selesai dalam hitungan menit dengan template dari HAKITA.
                            </p>
                            <a><Button variant="success">LEARN MORE  < FontAwesomeIcon icon={faArrowRight} /></Button></a>

                        </div>
                    </Col>
                    <Col xs={12} sm={4} className="service-card">
                        <div>
                            <Row className="service-icon">
                                <Col xs={4}>
                                    <Image src="assets/service2.png" fluid />
                                </Col>
                            </Row>
                        </div>
                        <div className="service-label">
                            <h5>Sistem Manajemen Dokumen</h5>
                            <p>
                                Kerja lebih efisien dengan HAKITA! Tidak hanya memantau ribuan dokumen yang Anda miliki, teknologi kami juga dapat memberi tahu Anda jika ada dokumen yang membutuhkan perhatian khusus lewat fitur reminder kami.
                            </p>
                            <a><Button variant="success">LEARN MORE  < FontAwesomeIcon icon={faArrowRight} /></Button></a>

                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
