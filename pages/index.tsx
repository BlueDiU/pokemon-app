import type { NextPage } from 'next';
import { Button } from '@nextui-org/react';

const HomePage: NextPage = () => {
  return (
    <>
      <h1>Hola mundo</h1>
      <Button color="gradient">Click me</Button>
    </>
  );
};

export default HomePage;
