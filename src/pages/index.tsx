import React from 'react';

import Head from 'next/head';

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>NextJS Structure</h1>
      <p>Template by Patrick Cavalcante</p>
    </Container>
  );
};

export default Home;
