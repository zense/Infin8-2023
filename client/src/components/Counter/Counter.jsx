import "./Counter.scss"
import { useState, useEffect } from "react";
const Counter = ({dayshoursMinSecs}) => {
    const { das=0, hours = 0, minutes = 0, seconds = 0 } = dayshoursMinSecs;
    const [[days, hrs, mins, secs], setTime] = useState([das, hours, minutes, seconds]);

    const tick = () => {
        if(days==0 && hrs === 0 && mins === 0 && secs === 0){
            reset()
        }
        else if (hrs === 0 && mins === 0 && secs === 0) {
            setTime([days - 1, 23, 59, 59]);
        }
        else if (mins === 0 && secs === 0) {
            setTime([days, hrs - 1, 59, 59]);
        }
        else if (secs === 0) {
            setTime([days, hrs, mins - 1, 59]);
        }
        else {
            setTime([days, hrs, mins, secs - 1]);
        }
    };

    const reset = () => setTime([parseInt(das),parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    return(
        <div className="square-container">
            <div className="row">
                <div className="col-4 col-xl-2 square-box">
                    <div className="square-orange">
                        <div className="square-text">00</div>
                        <div className="square-subtitle ">Days</div>
                    </div>
                </div>
                <div className="col-4 col-xl-2 square-box">
                    <div className="square-orange">
                        <div className="square-text">00</div>
                        <div className="square-subtitle square-subtitle__2">Hour</div>
                    </div>
                </div>
                <div className="col-4 col-xl-2 square-box">
                    <div className="square-orange">
                        <div className="square-text">00</div>
                        <div className="square-subtitle">Mins</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Counter;