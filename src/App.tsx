import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddressCard from './components/AddressCard';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Home />
      <AddressCard name='naresh barfa' ipAddress='1.2.3.4:3000' status='on' date={new Date()} />
    </>
  );
}

export default App;
