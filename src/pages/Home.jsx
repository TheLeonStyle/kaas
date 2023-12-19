import React from 'react';
import Intro from '../components/HomePage/Intro/Intro';
import Catalog from '../components/HomePage/Catalog/Catalog';

const Home = ({ editor }) => {
  return (
    <>
      <Intro editor={editor?.intro} />
      <Catalog editor={editor?.catalog} />
    </>
  );
};

export default Home;
