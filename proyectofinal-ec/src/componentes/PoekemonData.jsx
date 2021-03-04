import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function PokemonData(props){
    return (
        <Container className="mt-2">
            <Row>
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Header>
                            <h5>{props.name}</h5>
                        </Card.Header>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}