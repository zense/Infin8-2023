import "./Counter.scss"
const Counter = () => {
    return(
        <div className="square-container">
            <div className="row">
                <div className="col-4 col-xl-3">
                    <div className="square-orange">
                        <div className="square-text">24</div>
                        <div className="square-subtitle ">Days</div>
                    </div>
                </div>
                <div className="col-4 col-xl-3 ">
                    <div className="square-orange">
                        <div className="square-text">00</div>
                        <div className="square-subtitle ">Hours</div>
                    </div>
                </div>
                <div className="col-4 col-xl-3 ">
                    <div className="square-orange">
                        <div className="square-text">59</div>
                        <div className="square-subtitle ">Mins</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Counter;