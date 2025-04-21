import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import './styles/App.css';
import Navbar from '../../avery-harris-portfolio/src/components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from '../../avery-harris-portfolio/src/components/Footer';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1; /* Pushes footer down */
`;

const FooterComponent = styled.div`
  width: 100%;
  margin-top: auto;
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainContent>
        <FooterComponent>
          <Footer />
        </FooterComponent>
      </AppContainer>
    </Router>
  );
}

export default App;

