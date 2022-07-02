import { ReactNode } from 'react';

import Head from 'next/head';
import { Navbar } from '../ui';

interface IProps {
  children: ReactNode;
  title?: string;
}

const origin =
  typeof window === 'undefined' ? '' : window.location.origin;

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

        <meta
          property="og:title"
          content={`Información sobre ${title}`}
        />
        <meta
          property="og:description"
          content={`Pagina sobre ${title}`}
        />
        <meta
          property="og:image"
          content={`${origin}/img/banner.png`}
        />
      </Head>
      <Navbar />
      <main style={{ padding: '0px 20px' }}>{children}</main>
    </>
  );
};
