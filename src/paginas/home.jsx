import React from "react";
import { Col, Row } from "react-bootstrap";
import { fetchPokemon } from "../api/apiPokemon";
import Buscador from "../componentes/buscador"
import PokemonData from "../componentes/PoekemonData";
import { Spinner, Alert } from 'react-bootstrap';

const spinnerStyle = {
    width: '10rem',
    height: '10rem',
    borderWidth: '1rem',
  };
  
  const spinnerWrapperStyle = {
    textAlign: 'center',
    marginTop: '50px',
  }

export default function HomePage(){

    const [pokemon, setPokemon] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState('');

    const getPokemon = async (query) => {
        if (!query) {
          setErrorMsg('No has buscado un pokemon');
          setError(true);
          return;
        }
        setError(false);
        setLoading(true);
        setTimeout(async () => {
          try {
            const response = await fetchPokemon(query);
            const results = await response.json();
            console.log(results);
            setPokemon(results);
            setLoading(false);
          } catch (err) {
            console.log(err);
            setLoading(false);
            setError(true);
            setErrorMsg('No se ha encontrado este pokemon :(');
          }
        });
      }

    return (
        <div>
            {error ? (
            <Alert variant='danger'>{errorMsg}</Alert>
            ): null}
            <Buscador getPokemon={getPokemon} />
            {!loading && pokemon ? (
                <PokemonData 
                    name={pokemon.name}
                    sprite={pokemon.sprites.front_default} 
                    sprite2={pokemon.sprites.back_default}
                    sprite3={pokemon.sprites.front_shiny}
                    sprite4={pokemon.sprites.back_shiny} 
                    abilities={pokemon.abilities}
                    stats={pokemon.stats}
                    types={pokemon.types}
                    moves={pokemon.moves} />
            ): null/*(
            
            <div className="container">
                <Row>
                    <Col>
                    <h1 className="text-center h3 text-danger">No has buscado o no existe este Pokemon.</h1>
                    </Col>
                </Row>
            </div>)*/}
        </div>
    )
}