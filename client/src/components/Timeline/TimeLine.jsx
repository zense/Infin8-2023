import './TimeLine.scss';

import LeftCard from './LeftCard';
import RightCard from './RightCard';

const TimeLine = () => {
    return <div className="Timeline">
        {/* heading  */}
        <div className="row">
            <div className="heading">
                TIMELINE
            </div>
        </div>

        {/* timeline cards */}
        <div className="largescreens d-none d-md-block">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="beginRect">
                        INFIN8 BEGINS
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
            <div className="row">
                <div className="lineBox col-6">
                    <div className="space2"></div>
                    <LeftCard image="../../images/concert.jpeg" title="Title" incentives="Fuckall" time="12.20PM"></LeftCard>
                    <div className="space"></div>
                </div>
                <div className="col-6">
                    <div className="space"></div>
                    <RightCard image="../../images/concert.jpeg" title="Title" incentives="Fuckall" time="12.20PM"></RightCard>
                </div>
            </div>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="beginRect">
                        INFIN8 ENDS
                    </div>
                </div>
                <div className="col-3"></div>
                <div className="space"></div>
            </div>
        </div>

        <div className="smallscreens d-block d-md-none">
            <div className="row">
                <div className="col-4">
                    <div className="beginRect">
                        INFIN8 BEGINS
                    </div>
                </div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="lineBox col-10">
                    <div className="space">
                    </div>
                    <RightCard image="../../images/concert.jpeg" title="Title" incentives="Fuckall,kidding lots of incentives." time="12.20PM"></RightCard>
                    <div className="space"></div>
                    <RightCard image="../../images/concert.jpeg" title="Title" incentives="Fuckall" time="12.20PM"></RightCard>
                    <div className="space"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="beginRect">
                        INFIN8 ENDS
                    </div>
                </div>
                <div className="col"></div>
            </div>
            
        </div>
    </div>
}

export default TimeLine;