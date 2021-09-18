import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    getGalleryList();
  })

  const [galleryList, setGalleryList] = useState([]);

  const getGalleryList = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then((reponse) => {
      console.log(reponse);
      setGalleryList();
    }).catch((error) => {
      console.log(error);
      alert('Could Not GET /gallery')
    })
  }

  const postGalleryList = () => {
    axios({
      method: 'POST',
      url: '/gallery',
      data: [ path, description ]
    }).then((respond) => {
      console.log(respond);
      getGalleryList();
    }).catch((error) => {
      console.log(error);
      alert('Could Not POST /gallery')
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <GalleryList 
          list={galleryList}


        /> */}
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
