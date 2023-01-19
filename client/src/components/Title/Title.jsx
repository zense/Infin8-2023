import "./Title.scss";
import Infin8 from "../../images/Infin8_black_text.svg";
import Infin8white from "../../images/Infin8_white_text.png";
import year from "../../images/2023_text.svg";
import Counter from "../Counter/Counter"
import { useEffect, useState } from "react";
import FadeInOut from "./FadeInOut";

const Title = () => {
    const [dayshoursMinSecs, setdayshoursMinSecs] = useState({ das: 0, hours: 0, minutes: 0, seconds: 0 });
    const finalDate = new Date("2023-02-10T00:00:00");

    useEffect(() => {
        const diffDate = finalDate - new Date();
        const days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffDate % (1000 * 60)) / 1000);
        setdayshoursMinSecs({ das: days, hours: hours, minutes: minutes, seconds: seconds })
    }, [])
    return <div className="titlecontainer" >
        <FadeInOut show={true} duration={3500}>
            <div className="flicker" id='titleflicker'>
            </div>
        </FadeInOut>
        <div className="Title">
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
            <Counter dayshoursMinSecs={dayshoursMinSecs} />
        </div>
    </div>
};

export default Title;