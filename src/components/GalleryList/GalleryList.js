function GalleryList( props ) {

    return(
    <>
        <div>
            {props.list.map( image => (
                <p key={image.id}><img src={image.path}/> {image.description}</p>
            ))
            }
        </div>
    </>
    );
};

export default GalleryList;