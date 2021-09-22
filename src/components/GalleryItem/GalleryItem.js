import { useState } from 'react';
import axios from 'axios';

function GalleryItem ( {image} ){
    const [showDescription, setShowDescription] = useState(true);
    const [likeCounter, setLikeCounter] = useState(0);
    
    const toggleDisplay = () => {
        console.log('clicked image');
        setShowDescription(!showDescription)
    }

    return(
        <div className="item" key={image.id}>
                <h3 onClick={toggleDisplay}>{ !showDescription ? (<p>{image.description}</p>) : (<img id="image-gallery" src={image.path}/>) }</h3>
                <button onClick={() => setLikeCounter( likeCounter + 1 )}>Like This <span>{likeCounter}</span></button>
        </div>
    )
}

export default GalleryItem;
