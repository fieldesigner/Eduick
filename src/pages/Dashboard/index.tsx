import React from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import List from '../../components/List';
import { GlobalStyle, DashStyle } from '../../styles/global';

const Dashboard: React.FC = () => {
  return (
    <>
    <Header />
    <div className="centro main">
      <Banner />
      <List />
    </div>
    <Footer />
    <GlobalStyle />
    <DashStyle />
    </>
  );  
}

export default Dashboard;