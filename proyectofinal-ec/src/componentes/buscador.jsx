import React from "react";
import { Form, Container, Col, Button } from "react-bootstrap";

export default function Buscador(props){

    const [search, setSearch] = React.useState('');

    return (
        <Container>
            <h1>{search}</h1>
            <Form className="mt-2">
                <Form.Row className="align-items-center">
                    <Col sm={10} className="my-1">
                        <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="¡Busca un Pokemon!" />
                    </Col>
                    <Col sm={2} className="my-1">
                        <Button block onClick={(e) => props.getPokemon(search)}>Buscar</Button>
                    </Col>
                </Form.Row>
            </Form>
        </Container>
    )
}