import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

type FavoritePokemonsProps = { pokemons: number[] };

export const FavoritePokemons = ({
  pokemons,
}: FavoritePokemonsProps) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((pokemonId) => (
        <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId}>
          <FavoriteCardPokemon id={pokemonId} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
