const PokemonDetails = ({ pokemon }) => {
    return (
      <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h2>{pokemon.name}</h2>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Types: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
        <p>Order: {pokemon.order}</p>
      </div>
    );
  };
  
  export default PokemonDetails;
  