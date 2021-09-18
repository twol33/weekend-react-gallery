import Axios from 'axios';
import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    getImages();
  })

  const [imageList, setImageList] = useState([]);

  const getImages = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then((reponse) => {
      console.log(reponse);
      setImageList();
    }).catch((error) => {
      console.log(error);
      alert('Could Not GET /gallery')
    })
  }

  const postImages = () => {
    axios({
      method: 'POST',
      url: '/gallery',
      data: [ path, description ]
    }).then((respond) => {
      console.log(respond);
      getImages();
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
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
