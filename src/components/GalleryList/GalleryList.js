import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList( props ) {

    const pictureGallery = props.list.map( (image  => {
        return (
            <GalleryItem image={image}/>
        )
    }));

    return(
    <div>
        {pictureGallery}
    </div>
    );
}

export default GalleryList;