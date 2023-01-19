import "./Gallery.scss"
import Card from "./Card"
import data from '../../content/gallery_content'

const Gallery = () => {
    const galleryCards = [];
    for (var i = 0; i < data.length; i++) {
        
        var link="./Eventimages/"+ data[i]['id']+".jpg";
        galleryCards.push(
            <Card
                title={data[i]['title']}
                incentives={data[i]['incentives']}
                image = {link}
            id = {data[i]['id']}
            />
        );
    }
    return <div className="Gallery" id="Gallery">
        <div className="row">
            <h1 className="heading">
                GALLERY OF
            </h1>
        </div>
        <div className="row">
            <h1 className="heading2">
                BIG EVENTS.
            </h1>
        </div>
        <div className="scroll">
            {galleryCards}
        </div>
    </div>
}

export default Gallery;