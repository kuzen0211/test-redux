import { useState } from 'react';
import { useGetPokemonByNameQuery } from '../redux/pokemon';

export const Homepage = () => {
  const [pokemonName, setPokemonName] = useState('');
  const {
    data,
    error,
    isError,
    isLoading,
    refetch,
    isUninitialized,
    isFetching,
  } = useGetPokemonByNameQuery(pokemonName, {
    skip: pokemonName === '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    setPokemonName(e.currentTarget.elements.pokemonName.value);
  };

  return (
    <>
      <h1>HOME PAGE</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="pokemonName" />
        <button type="submit">Pokemon</button>
        <button type="button" onClick={refetch} disabled={isUninitialized}>
          Refetsh
        </button>
      </form>
      {isError && <h2>{error.data}</h2>}
      {data && !isError && <h1>{data.name}</h1>}
    </>
  );
};
