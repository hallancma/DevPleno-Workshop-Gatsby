import React from 'react';
import './style.css';
import BtnWhatsapp from '../components/BtnWhatsapp';
import Logo from '../components/Logo';
import Hero from '../components/Hero';
import Selo from '../components/Selo';
import Projetos from '../components/Projetos';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
//import Footer from '../components/Footer';

const Index = () => {
  const { site } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
      </Helmet>
      <Header>
        <Logo />
        <div>
          <BtnWhatsapp />
        </div>
      </Header>
      <Hero />
      <Selo />
      <Projetos />
      <Footer />
    </div>
  );
};

export default Index;
