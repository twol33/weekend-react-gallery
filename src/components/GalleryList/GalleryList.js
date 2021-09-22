import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList( {list} ) {

    let pictureGallery = list.map( (image)  => {
        return (
            <GalleryItem image={image}/>
        )
    });

    return(
    <div>
        {pictureGallery}
    </div>
    );
}

export default GalleryList;