import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "./About.css";

export default class About extends Component {
    render() {
        return (
            <div className="about" id="about">
                <Row className="about-content">
                    <Col sm={8} className="about-us" >
                        <h4>About us</h4>
                        <p>HAKITA adalah sebuah platform yang menjawab kebutuhan masyarakat Indonesia dalam membuat dan memproses dokumen legal yang aman dan terpercaya. Kami menggunakan teknologi otomasi untuk mempermudah proses pembuatan dokumen.</p>
                    </Col>
                    <Col sm={4} className="contact-us">
                        <h4>Contact us</h4>
                        <p>Mail: info@hakita.comAlamat: Jl. Boulevard Barat Raya</p>
                        <p>No.27, RW. 9,Kelapa Gading Barat - Jakarta</p>
                        <p>Utara14240</p>
                        <a href="https://fb.me/hakita.id">
                            <img src="assets/facebook.png" classname="facebook"></img>
                        </a>
                        <a href="https://instagram.com/hakita.id">
                            <img src="assets/instagram.png" classname="facebook"></img>
                        </a>
                    </Col>
                </Row>
            </div >
        )
    }
}
