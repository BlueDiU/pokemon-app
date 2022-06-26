import Head from 'next/head';
import { ReactNode } from 'react';
import { Navbar } from '../ui';

interface IProps {
  children: ReactNode;
  title?: string;
}

export const Layout = ({ children, title }: IProps) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="josue rivas" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon: ${title}`}
        />
        <meta
          name="keywords"
          content={`${title}, pokemon, pokedex`}
        />
      </Head>
      <Navbar />
      <main style={{ padding: '0px 20px' }}>{children}</main>
    </>
  );
};
