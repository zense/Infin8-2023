import "./Gallery.scss"
import Card from "./Card"

const Gallery = () => {
    return <div className="Gallery">
        <div className="row">
            <h1 className="heading">
                GALLERY OF
            </h1>
        </div>
        <div className="row">
            <h1 className="heading">
                BIG EVENTS.
            </h1>
        </div>
        <div className="scroll">
            <Card title="Lorem" incentives="ipsum" />
            <Card title="Lorem" incentives="ipsum" />
            <Card title="Lorem" incentives="ipsum" />
            <Card title="Lorem" incentives="ipsum" />
            <Card title="Lorem" incentives="ipsum" />
            <Card title="Lorem" incentives="ipsum" />
            <Card title="Lorem" incentives="ipsum" />
        </div>
        <div className="space"></div>
    </div>
}

export default Gallery;