
import { useState } from 'react';

function GalleryItem ( props ){
    const [showDescription, setShowDescription] = useState(true);
    const [likeCounter, setLikeCounter] = useState(0);
    
    const toggleDisplay = () => {
        console.log('clicked image');
        setShowDescription(!showDescription)
    }

    return(
        <div className="item">
            {props.list.map( (props) => (
                <ul key={props.id}>
                    { !showDescription && <p>{props.description}</p> }
                    <p><img src={props.path} onClick={toggleDisplay}/></p>
                    <button onClick={() => setLikeCounter( likeCounter + 1)}>Like This <span>{likeCounter}</span></button>
                </ul>
            ))}
        </div>
    )
}

export default GalleryItem;