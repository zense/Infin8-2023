import "./Title.scss";
import Infin8 from "../../images/Infin8_black_text.svg";
import Infin8white from "../../images/Infin8_white_text.png";
import year from "../../images/2023_text.svg";

const Title = ()=>{
    return <div className="Title container">
        <div className="infi">
            <img src={Infin8} alt="" className="infiimg" />
        </div>
        <div className="infi d-block d-sm-none">
            <img src={Infin8white} alt="" className="infiimg2" />
        </div>
        <div className="infi d-block d-sm-none">
            <img src={Infin8white} alt="" className="infiimg3" />
        </div>
        <div className="year">
            <img src={year} alt="" className="yearimg" />
        </div>
    </div>
};

export default Title;