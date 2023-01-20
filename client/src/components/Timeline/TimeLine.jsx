import './TimeLine.scss';
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import Fade from 'react-reveal/Fade';
import { day1, day2, day3 } from '../../content/timeline _content';
import { useState } from 'react';


const TimeLine = () => {
    const [day, setDay] = useState(1);
    const giveSetFunction = (i) => {
        var ret = () => {
            setDay(i);
        }
        return ret;
    }

    var navlinks = [];
    for (var i = 1; i <= 3; i++) {
        if (day == i) {
            navlinks.push(
                <a class="nav-link active" aria-current="page" onClick={giveSetFunction(i)}>DAY {i}</a>
            )
        } else {
            navlinks.push(
                <a class="nav-link" aria-current="page" onClick={giveSetFunction(i)}>DAY {i}</a>
            )
        }
    }
    var desktopCardsLeft = [];
    var desktopCardsRight = [];
    var mobileCards = [];

    var ct = 0;
    var data = day3;
    if (day == 1) {
        data = day1;
    } else if (day == 2) {
        data = day2;
    }
    for (var i = 0; i < data.length; i++) {
        var link = "./Eventimages/" + data[i]["id"] + ".jpg";
        if (ct & 1) {
            desktopCardsRight.push(
                <>
                    <div className="space" id='event'></div>
                    <RightCard image={link} title={data[i]["title"]} incentives={data[i]["incentives"]} time={data[i]["time"]} id={data[i]["id"]} disabled = {data[i]["id"] == 19 ? true  : false}></RightCard>
                </>
            );
        } else {
            desktopCardsLeft.push(
                <>
                    <LeftCard image={link} title={data[i]["title"]} incentives={data[i]["incentives"]} time={data[i]["time"]} id={data[i]["id"]}></LeftCard>
                    <div className="space"></div>
                </>
            );
        }
        ct++;
        mobileCards.push(
            <>
                <div className="space">
                </div>
                <RightCard image={link} title={data[i]["title"]} incentives={data[i]["incentives"]} time={data[i]["time"]} id={data[i]["id"]}></RightCard>
            </>
        )
    }
    const beginString = [
        "INFIN8 BEGINS",
        "DAY 2 BEGINS",
        "DAY  3  BEGINS",
    ];
    const endString = [
        "DAY 1 ENDS",
        "DAY 2 ENDS",
        "INFIN8 ENDS",
    ];


    return <div className="Timeline" id="Timeline">
        {/* heading  */}
        <div className="row headingrow">
            <div className="heading">
                TIMELINE
            </div>
        </div>
        <div className="row overlayrow">
            <div className="overlay">
                infin8'23
            </div>
        </div>
        <div className="row navrow">
            <nav class="nav nav-pills nav-justified">
                {navlinks}
            </nav>
        </div>
        {/* timeline cards */}
        <div className="largescreens d-none d-md-block">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="beginRect">
                        {beginString[day - 1]}
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
            <div className="row">
                <div className="lineBox col-6">
                    <div className="space2"></div>
                    {desktopCardsLeft}
                </div>
                <div className="col-6">
                    {desktopCardsRight}
                    <div className="space2"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="beginRect">
                        {endString[day - 1]}
                    </div>
                </div>
                <div className="col-3"></div>
                <div className="space2"></div>
            </div>
        </div>

        <div className="smallscreens d-block d-md-none">
            <div className="row">
                <div className="col-4">
                    <div className="beginRect">
                        {beginString[day - 1]}
                    </div>
                </div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="lineBox col-10">
                    {mobileCards}
                    <div className="space"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="beginRect">
                        {endString[day - 1]}
                    </div>
                </div>
                <div className="col"></div>
            </div>
            <div className="space"></div>
        </div>
    </div>
}

export default TimeLine;