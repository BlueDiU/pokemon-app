import { Card, Grid, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '../../interfaces';

interface IProps {
  pokemon: SmallPokemon;
}

export const PokemonCard = ({ pokemon }: IProps) => {
  const { image, name, id } = pokemon;

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={image} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text># {id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};