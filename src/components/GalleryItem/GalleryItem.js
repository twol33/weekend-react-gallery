
import { useState } from 'react';

function GalleryItem ( props ){
    const [showDescription, setShowDescription] = useState(true);
    
    const toggleDisplay = () => {
        console.log('clicked image');
        setShowDescription(!showDescription)
    }

    return(
        <div className="item">
            {props.list.map( image => (
                <ul key={image.id}>
                    {/* {displaySwitch()} */}
                    { !showDescription && <p>{image.description}</p> }
                    <p><img src={image.path} onClick={toggleDisplay}/></p>
                    <button>Like This <span>0</span></button>
                </ul>
            ))}
            {/* {displayWhich()} */}
            {/* <p key={image.id}><img src={image.path} onClick={image.description}/><button>Like This</button><span>0</span></p> */}
            {/* <button onClick={toggleDescription}><img src={image.path}/></button> */}
        </div>
    )
}

export default GalleryItem;