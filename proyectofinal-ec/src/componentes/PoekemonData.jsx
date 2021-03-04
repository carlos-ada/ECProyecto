import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function PokemonData(props){
    return (
        <Container className="mt-2">
            <Row>
                <Col xs={12} md={6}>
                    <Card className="bg-light shadow border-success">
                        <Card.Header>
                            <h5 className="text-dark text-capitalize display-5">{props.name}</h5>
                            <img width={130} height={130} src={props.sprite} alt={props.name}/>
                            <img width={130} height={130} src={props.sprite2} alt={props.name} />
                        </Card.Header>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card className="bg-dark shadow border-warning">
                        <Card.Header>
                            <h5 className="text-light text-capitalize display-5">{props.name} shiny</h5>
                            <img width={130} height={130} src={props.sprite3} alt={props.name}/>
                            <img width={130} height={130} src={props.sprite4} alt={props.name} />
                        </Card.Header>
                    </Card>
                </Col>
            </Row>
            <Row>
            <Col xl={12} xs={12} sm={12} className="col-lg-offset-5 mt-4">
                    <Card className="shadow border-info">
                        <Card.Header className="bg-success">
                            <h5 className="text-light text-capitalize display-5 pt-2">Habilidades de {props.name}</h5>
                        </Card.Header>
                        <Card.Body>
                            <h5 className="text-dark text-capitalize display-5 pt-2">Habilidades de {props.name}</h5>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        
    )
}