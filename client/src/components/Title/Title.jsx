import "./Title.scss";
import Infin8 from "../../images/Infin8_black_text.svg";
import Infin8white from "../../images/Infin8_white_text.png";
import year from "../../images/2023_text.svg";

const Title = ()=>{
    return <div className="Title">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="row titlerow">
                    INFIN8
                </div>
                <div className="row titlerow">
                    2023.
                </div>
            </div>
        </div>
    </div>
};

export default Title;