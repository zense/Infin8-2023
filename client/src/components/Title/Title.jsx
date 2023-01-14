import "./Title.scss";
import Infin8 from "../../images/Infin8_black_text.svg";
import Infin8white from "../../images/Infin8_white_text.png";
import year from "../../images/2023_text.svg";
import Counter from "../Counter/Counter"
const Title = ()=>{
    return <div className="Title">
        <div className="row">
            <div className="col-12 col-sm-6">
                <div className="row titlerow">
                    INFIN8
                </div>
                <div className="row titlerow orange">
                    2023.
                </div>
            </div>
        </div>
        <Counter />
    </div>
};

export default Title;