import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <React.Fragment>
      <Header />
      <SideBar />
      <Dashboard />
    </React.Fragment>
  );
}

export default App;
