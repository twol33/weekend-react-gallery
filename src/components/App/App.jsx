import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.js';
// import GalleryItem from '../GalleryItem/GalleryItem.js';

function App() {

  useEffect(() => {
    getGalleryList();
  })

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

  // const setGalleryList = () => {
  //   axios({
  //     method: 'POST',
  //     url: '/gallery',
  //     data: [ path, description ]
  //   }).then((respond) => {
  //     console.log(respond);
  //     getGalleryList();
  //   }).catch((error) => {
  //     console.log(error);
  //     alert('Could Not POST /gallery')
  //   })
  // }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <div>
        <GalleryList list={galleryList}/>
        {/* <GalleryItem list={galleryList}/> */}
        </div>


        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
