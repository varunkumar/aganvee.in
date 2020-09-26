import React from 'react';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import Contact from '../components/contact';
import Hero from '../components/hero';
import Layout from '../components/layout';

const Aganvee = () => (
  <Layout>
    <Parallax pages={2}>
      <Hero offset={0} factor={1} />
      <Contact offset={1} factor={1} />
    </Parallax>
  </Layout>
);

export default Aganvee;
