import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { pokeApi } from '../../api';
import { Pokemon, PokemonListResponse } from '../../interfaces';

interface IProps {
  pokemons: Pokemon;
}

const PokemonByNamePage: NextPage<IProps> = ({ pokemons }) => {
  return (
    <div>
      <h1>Pokemon By Name: {pokemons.name}</h1>
    </div>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(
    `https://pokeapi.co/api/v2/pokemon?limit=20`
  );

  const pokemonNames: string[] = data.results.map(
    (pokemon) => pokemon.name
  );

  return {
    paths: pokemonNames.map((name) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}) => {
  const { name } = params as { name: string };

  const { data } = await pokeApi.get<Pokemon>(
    `/pokemon/${name}`
  );

  return {
    props: {
      pokemons: data,
    },
  };
};

export default PokemonByNamePage;
