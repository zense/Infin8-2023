import "./Gallery.scss"
import Card from "./Card"
import data from '../../content/gallery_content'
import Zoom from 'react-reveal/Zoom';



const Gallery = () => {
    const galleryCards = [];
    for (var i = 0; i < data.length; i++) {

        var link = "./Eventimages/" + data[i]['id'] + ".jpg";
        galleryCards.push(
            <Card
                title={data[i]['title']}
                incentives={data[i]['incentives']}
                image={link}
                id={data[i]['id']}
                isReg = {data[i]['id'] == 2 ? true  : false}
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
        <Zoom>
            <div className="scroll">
                {galleryCards}
            </div>
        </Zoom>
    </div>
}

export default Gallery;