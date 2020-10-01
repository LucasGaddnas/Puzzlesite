import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageGrid />
      <Footer />
    </div>
  );
}

export default App;
