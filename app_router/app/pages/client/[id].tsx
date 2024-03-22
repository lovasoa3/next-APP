import { useEffect, useState } from 'react';
import PokemonDetails from '../../app/components/PokemonDetails';

const PokemonPage = ({ pokemonId }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await response.json();
      setPokemon(data);
    };
    fetchPokemon();
  }, [pokemonId]);

  return (
    <div>
      <h1>Pokemon Details</h1>
      {pokemon && <PokemonDetails pokemon={pokemon} />}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  return {
    props: {
      pokemonId: params.id,
    },
  };
}

export default PokemonPage;
