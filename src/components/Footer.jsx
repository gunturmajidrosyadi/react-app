import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Container className="footer-page">
                    <div className="tag">
                        <a href="#">
                            Syarat&Ketentuan
                        </a>
                        <a href="#">
                            Kebijakan Privasi
                        </a>
                        <a href="#">
                            Panduan Pembayaran
                        </a>
                    </div>
                    <div>
                        <span>© PT Legalindo Mitra Abadi, 2020</span>
                    </div>
                </Container>
                
            </div>
        )
    }
}
