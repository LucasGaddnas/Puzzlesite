import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import UploadForm from './components/UploadForm';
import Pagination from './components/Pagination';
import Filter from './components/Filter';
import useFirestore from './hooks/useFirestore';
import { projectFirestore } from './firebase/config';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showUpload, setShowUpload] = useState(false);
  const [itemsOnPage, setItemsOnPage] = useState(16);
  const [query, setQuery] = useState(projectFirestore.collection('puzzles').orderBy('createdAt', 'desc').limit(itemsOnPage));
  const [order, setOrder] = useState('desc');
  const [field, setField] = useState('createdAt');

  // Fetch all items from firestore
  const { docs, firstDoc, lastDoc } = useFirestore(query);

  // Show/hide the uploadform
  const onClick = () => {
    showUpload ? setShowUpload(false) : setShowUpload(true);
  }

  return (
    <div className="App">
      <Header />
      <button className="control" onClick={onClick}>Add</button>
      { showUpload ? <UploadForm /> : null }
      <Filter setQuery={setQuery} setItemsOnPage={setItemsOnPage} setOrder={setOrder} setField={setField} itemsOnPage={itemsOnPage} order={order} field={field}/>
      <ImageGrid setSelectedImg={setSelectedImg} docs={docs}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
      <Pagination setQuery={setQuery} firstDoc={firstDoc} lastDoc={lastDoc} itemsOnPage={itemsOnPage} order={order} field={field}/>
      <Footer />
    </div>
  );
}

export default App;
