import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <div className="App">
      <Header />
      <UploadForm />
      <Footer />
    </div>
  );
}

export default App;
