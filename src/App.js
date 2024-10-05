import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './components/Navbar/navbar';
import './App.css';
import TourList from './components/TourList';

function App() {
  return (
  <main>
    
     <Navbar />
     <TourList/>
  </main>
 
  
  );
}

export default App;
