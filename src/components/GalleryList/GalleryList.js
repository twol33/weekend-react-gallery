function GalleryList( props ) {

    return(
    <>
            {props.list.map( image => (
                <p key={image.id}><img src={image.path}/><button>Like</button><span>0</span></p>
            ))}
    </>
    );
};

export default GalleryList;