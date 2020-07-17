import React, { Component } from 'react'
import { Container, Row, Col,Button } from "react-bootstrap";
import "./Article.css";

export default class Article extends Component {
    render() {
        return (
            <Container className="article" id="article">
                <div className="title-section">
                    <h1>Love Reading, Keep Reading</h1>
                    <p>Punya pertanyaan soal hukum? Temukan jawabannya di blog HAKITA.</p>
                </div>
                <div className="content-section">
                    <Row className="article-section">
                        <Col xs={12} sm={4} className="article-card">
                            <div className="article-item">
                                    <Button variant="primary" size="sm" disabled>
                                        Blog
                                    </Button>
                                    <p className="article-title">Konser Semasa COVID 19, Boleh?</p>
                                    <p>6/15/2020, 8:34:06 PM</p>
                                    <a href="#">Read More</a>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} className="article-card">
                            <div className="article-item">
                                <Button variant="primary" size="sm" disabled>
                                    Blog
                                    </Button>
                                <p className="article-title">Instansi Pemerintah yang Tetap Buka semasa COVID 19</p>
                                <p>6/14/2020, 8:11:02 PM</p>
                                <a href="#">Read More</a>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} className="article-card">
                            <div className="article-item">
                                <Button variant="primary" size="sm" disabled>
                                    Blog
                                    </Button>
                                <p className="article-title">Kegiatan Keagamaan Saat PSBB</p>
                                <p>6/11/2020, 12:55:23 PM</p>
                                <a href="#">Read More</a>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        )
    }
}
