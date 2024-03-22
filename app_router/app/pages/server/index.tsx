import { useState } from 'react';
import { useRouter } from 'next/router';
import PokemonList from '../../app/components/PokemonList';

const ServerPage = () => {
  const [offset, setOffset] = useState(0);
  const router = useRouter();

  const handleNextPage = () => {
    setOffset(offset + 50);
  };

  const handlePrevPage = () => {
    if (offset >= 50) {
      setOffset(offset - 50);
    }
  };

  return (
    <div>
      <h1>Server Page</h1>
      <PokemonList offset={offset} />
      <button onClick={handlePrevPage}>Previous</button>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
};

export default ServerPage;
