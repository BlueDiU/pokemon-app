import { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';

import {
  PokemonListResponse,
  SmallPokemon,
} from '../interfaces';

import { pokeApi } from '../api';

import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';

interface IProps {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<IProps> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Listado de pokemons">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(
    '/pokemon?limit=121'
  );

  const pokemons: SmallPokemon[] = data.results.map(
    (pokemon, i) => ({
      ...pokemon,
      id: i + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        i + 1
      }.svg`,
    })
  );

  return {
    props: { pokemons: pokemons },
  };
};

export default HomePage;
