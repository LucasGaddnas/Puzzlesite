import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import UploadForm from './components/UploadForm';
import Pagination from './components/Pagination';
import useFirestore from './hooks/useFirestore';
import { projectFirestore } from './firebase/config';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showUpload, setShowUpload] = useState(false);
  const [query, setQuery] = useState(projectFirestore.collection('puzzles').orderBy('createdAt', 'desc').limit(3));

  // Fetch all items from firestore
  const { docs, firstDoc, lastDoc } = useFirestore(query);

  // Show/hide the uploadform
  const onClick = () => {
    showUpload ? setShowUpload(false) : setShowUpload(true);
  }

  return (
    <div className="App">
      <Header />
      <button className="Addbtn" onClick={onClick}>Add</button>
      { showUpload ? <UploadForm /> : null }
      <ImageGrid setSelectedImg={setSelectedImg} docs={docs}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
      <Pagination setQuery={setQuery} firstDoc={firstDoc} lastDoc={lastDoc}/>
      <Footer />
    </div>
  );
}

export default App;
