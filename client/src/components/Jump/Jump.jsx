import './Jump.scss'
import arrow from '../../images/downrightthin.svg'

const Jump = () => {
    return <div className="Jump">
        <a href="">
            <div className="row jump1">
                <div className="col-8 col-md-10">
                    <h1 className="title">
                        Checkout the Timeline of all Events.
                    </h1>
                </div>
                <div className="col-4 col-md-2 arrowcol">
                    <div className="arrowdiv">
                        <img src={arrow} alt="" className="arrow" />
                    </div>
                </div>
            </div>
        </a>

        <a href="">
            <div className="row jump2">
                <div className="col-8 col-md-10">
                    <h1 className="title">
                        Skip to the Gallery of Big Events.
                    </h1>
                </div>
                <div className="col-4 col-md-2 arrowcol">
                    <div className="arrowdiv">
                        <img src={arrow} alt="" className="arrow" />
                    </div>
                </div>
            </div>
        </a>
    </div>;
}

export default Jump;