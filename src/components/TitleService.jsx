import React, { Component } from 'react'
import { Container } from "react-bootstrap";
import './TitleService.css'

export default class TitleService extends Component {
    render() {
        return (
            <Container className="title-service">
                <h1>Product and Services</h1>
                <p>Apapun kebutuhan legal Anda, biar HAKITA yang urus.</p>
            </Container>
        )
    }
}
