
function GalleryItem ( props ){

    return(
        <>
        {props.list.map( image => (
            <p><button key={image.id} onClick={image.description}><img src={image.path}/></button></p>
        ))}
        </>

    )
}

export default GalleryItem