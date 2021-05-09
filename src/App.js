import React, { useState } from 'react';
import ImageGrid from './components/ImageGrid.js';
import Modal from './components/Modal.js';
import Title from './components/Title.js';
import UploadForm from './components/UploadForm.js';

function App() {
  const [img, setImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setImg={setImg} />
      {img && <Modal img={img} setImg={setImg}/>}
    </div>
  );
}

export default App;