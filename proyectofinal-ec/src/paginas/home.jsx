import React from "react";
import { fetchPokemon } from "../api/apiPokemon";
import Buscador from "../componentes/buscador"
import PokemonData from "../componentes/PoekemonData";

export default function HomePage(){

    const [pokemon, setPokemon] = React.useState();
    const [loading, setLoading] = React.useState(false);

    const getPokemon = async (query) => {
        setLoading(true);
        const response = await fetchPokemon(query)
        //console.log(response);
        const results = await response.json();
        console.log(results);
        setPokemon(results);
        setLoading(false);
    }

    return (
        <div>
            <Buscador getPokemon={getPokemon} />
            {loading && pokemon ? (
                <PokemonData 
                    name={pokemon.name} />
            ): null}
        </div>
    )
}