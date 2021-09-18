function GalleryList( props ) {

    return(
    <>
        <ul>
            {props.list.map( image => (
                <li key={image.id}><img src={image.path}/> {image.description}</li>
            ))
            }
        </ul>
    </>
    );
};

export default GalleryList;