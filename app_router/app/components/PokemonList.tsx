import { useEffect, useState } from 'react';

const PokemonList = ({ offset }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`);
      const data = await response.json();
      setPokemonList(data.results);
    };
    fetchPokemonList();
  }, [offset]);

  return (
    <ul>
      {pokemonList.map((pokemon, index) => (
        <li key={index}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default PokemonList;
