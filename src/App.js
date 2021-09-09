import React, { useState } from 'react';
import Title from './main/Title';
import UploadForm from './main/UploadForm';
import ImageGrid from './main/ImageGrid';
import Modal from './main/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className='App'>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
