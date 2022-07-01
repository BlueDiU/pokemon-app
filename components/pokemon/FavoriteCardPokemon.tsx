import { Card } from '@nextui-org/react';
import { useRouter } from 'next/router';

export const FavoriteCardPokemon = ({ id }: { id: number }) => {
  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Card
      isHoverable
      isPressable
      css={{ padding: 10 }}
      onClick={onFavoriteClicked}
    >
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        width="100%"
        height="140px"
      />
    </Card>
  );
};
