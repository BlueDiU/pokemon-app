import React, { useEffect, useState } from 'react';

import { localFavorites } from '../../utils';

import { Layout } from '../../components/layouts';
import { FavoritePokemons } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui';

const FavoritesPage = () => {
  const [favoritesPokemon, setFavoritesPokemon] = useState<
    number[]
  >([]);

  useEffect(() => {
    setFavoritesPokemon(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favoritos">
      {favoritesPokemon.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritesPokemon} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
