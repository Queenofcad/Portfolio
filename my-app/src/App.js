import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="demo-big-content" style={{height: '660px', position: 'relative'}}>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
      <Header transparent title="PORTFOLIO" style={{color: 'white'}}>
        <Navigation>
          <Link to="/resume">Resumo</Link>
          <Link to="/aboutme">Sobre Mim</Link>
          <Link to="projects">Projetos</Link>
          <Link to="/contact">Contato</Link>
        </Navigation>
      </Header>
      <Drawer title="Menu">
        <Navigation>
          <Link to="/resume">Resumo</Link>
          <Link to="/aboutme">Sobre Mim</Link>
          <Link to="projects">Projetos</Link>
          <Link to="/contact">Contato</Link>
        </Navigation>
      </Drawer>
      <Content>
        <div className="page-content" />
          <Main/>
      </Content>
    </Layout>
  </div>
    );
  }
}

export default App;
