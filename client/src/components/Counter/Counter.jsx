import "./Counter.scss"
const Counter = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col col-sq">
                    <div className="square-orange">
                        <div className="square-text">24</div>
                    </div>
                </div>
                <div className="col">
                    <div className="square-orange">00</div>
                </div>
                <div className="col">
                    <div className="square-orange">59</div>
                </div>
            </div>
        </div>
    )
}
export default Counter;