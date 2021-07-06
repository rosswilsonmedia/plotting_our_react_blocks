import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Subcontents from './components/Subcontent';
import Advertisement from './components/Advertisement';


function App() {
  const appStyle = {
    backgroundColor: '#dddddd',
    padding: '1em',
    margin: '1em'
  }
  return (
    <div className="app" style={ appStyle }>
      <Header/>
      <Navigation/>
      <Main>
        <Subcontents/>
        <Subcontents/>
        <Subcontents/>
        <Advertisement/>
      </Main>
    </div>
  );
}

export default App;