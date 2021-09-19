import GalleryList from "../GalleryList/GalleryList";

function GalleryItem ( props ){

    return(
        <>
        {props.list.map( image => (
            <p><button key={image.id}>Like Button</button></p>
        ))}
        </>

    )
}

export default GalleryItem