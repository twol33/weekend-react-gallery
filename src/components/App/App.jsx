import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.js';
import GalleryItem from '../GalleryItem/GalleryItem.js';

function App() {

  useEffect(() => {
    getGalleryList();
  }, [])

  const [galleryList, setGalleryList] = useState([]);

  const getGalleryList = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then((response) => {
      console.log(response);
      setGalleryList(response.data);
    }).catch((error) => {
      console.log(error);
      alert('Could Not GET /gallery')
    })
  }

  const putGalleryLike = () => {
    axios({
      method: 'PUT',
      url: '/gallery/like/:id'
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
      alert('Error in PUT /gallery/likes')
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>The Gallery</p>
        <div>
          {/* galleryList needs to populate here */}
        <GalleryList list={galleryList}/>
        {/* <GalleryItem list={galleryList}/> */}
        </div>


      </div>
    );
}

export default App;
