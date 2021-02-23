import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import UploadForm from './components/UploadForm';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showUpload, setShowUpload] = useState(false);

  // Show/hide the uploadform
  const onClick = () => {
    showUpload ? setShowUpload(false) : setShowUpload(true);
  }

  return (
    <div className="App">
      <Header />
      <button className="Addbtn" onClick={onClick}>Add</button>
      { showUpload ? <UploadForm /> : null }
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
      <Footer />
    </div>
  );
}

export default App;
