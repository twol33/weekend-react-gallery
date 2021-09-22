import { useState } from 'react';

function GalleryItem ( {image} ){
    const [showDescription, setShowDescription] = useState(true);
    const [likeCounter, setLikeCounter] = useState(0);
    
    const toggleDisplay = () => {
        console.log('clicked image');
        setShowDescription(!showDescription)
    }

    return(
        <div className="item" key={image.id}>
                <h3 onClick={toggleDisplay}>{ !showDescription ? (<p>{image.description}</p>) : (<img src={image.path}/>) }</h3>
                <button onClick={() => setLikeCounter( likeCounter + 1)}>Like This <span>{likeCounter}</span></button>
        </div>
    )
}

export default GalleryItem;


// import { useState } from 'react';

// GalleryItem ( likeCounter, setLikeCounter )
// function GalleryItem ( props  ){
//     const [showDescription, setShowDescription] = useState(true);
//     const [likeCounter, setLikeCounter] = useState(0);
    
//     const toggleDisplay = () => {
//         console.log('clicked image');
        
//         setShowDescription(!showDescription)
//     }

//     const setLikeCounter = () => {
//         {likeCounter + 1}
//         putGalleryLike(response.data)
//     }

//     return(
//         <div className="item" onClick={toggleDisplay}>
//             {props.list.map( (props) => (
//                 <ul key={props.id}>
//                     {/* <p><img src={props.path} onClick={toggleDisplay}/></p> */}
//                     { !showDescription ? (<p>{props.description}</p>) : (<img src={props.path}/>) }
//                     <button onClick={() => setLikeCounter( likeCounter + 1)}>Like This <span>{likeCounter}</span></button>
//                 </ul>
//             ))}
//         </div>
//     )
// }

// export default GalleryItem;