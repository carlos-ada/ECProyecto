import React from "react";
import { Card, Col, Container, ProgressBar, Row } from "react-bootstrap";

export default function PokemonData(props){
    return (
        <Container className="mt-2">
            <Row>
                <Col xs={12} md={6}>
                    <Card className="bg-light shadow border-success">
                        <Card.Header className="bg-dark">
                            <h5 className="text-light text-capitalize display-5">{props.name}</h5>                           
                        </Card.Header>
                        <Card.Body className="bg-white">
                            <img width={130} height={130} src={props.sprite} alt={props.name}/>
                            <img width={130} height={130} src={props.sprite2} alt={props.name} />                           
                        </Card.Body>
                        <Card.Footer className="bg-dark">
                        {props.types.map((type, key) => (
                                <div key={key}>
                                    <h5 className="text-capitalize text-light font-weight-bolt"><span className="h5 text-warning">Tipo: </span>{type.type.name}</h5>
                                </div>
                            ))}
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card className="bg-info shadow border-warning">
                        <Card.Header>
                            <h5 className="text-light text-capitalize display-5">{props.name} shiny</h5>
                        </Card.Header>
                        <Card.Body className="bg-white">
                            <img width={130} height={130} src={props.sprite3} alt={props.name}/>
                            <img width={130} height={130} src={props.sprite4} alt={props.name} />                           
                        </Card.Body>
                        <Card.Footer className="bg-info">
                        {props.types.map((type, key) => (
                                <div key={key}>
                                    <h5 className="text-capitalize text-light font-weight-bolt"><span className="h5 text-warning">Tipo: </span>{type.type.name}</h5>
                                </div>
                            ))}
                        </Card.Footer>
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
                        {/*className="text-dark text-capitalize display-5 pt-2"*/}
                            {props.abilities.map((ability, key) => (
                                <div key={key}>
                                    <strong><span className="text-dark text-capitalize display-5 pt-2">{ability.ability.name}</span></strong>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
            <Col xl={12} xs={12} sm={12} className="col-lg-offset-5 mt-4">
                    <Card className="shadow border-info">
                        <Card.Header className="bg-success">
                            <h5 className="text-light text-capitalize display-5 pt-2">Estadisticas de {props.name}</h5>
                        </Card.Header>
                        <Card.Body>
                        {/*className="text-dark text-capitalize display-5 pt-2"*/}
                            {props.stats.map((stat, key) => (
                                <div key={key} >
                                    <strong><span className="text-capitalize">{stat.stat.name}</span></strong>
                                    <ProgressBar now={stat.base_stat} max={145} label={stat.base_stat} />
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}